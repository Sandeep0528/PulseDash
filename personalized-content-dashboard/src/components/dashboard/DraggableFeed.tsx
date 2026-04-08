import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import SortableCard from './SortableCard';
// import SortableCard from './SortableCard';

export default function DraggableFeed({ initialData }: { initialData: any[] }) {
    const [items, setItems] = useState(initialData);
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setItems((prev) => {
                const oldIndex = prev.findIndex((i) => i.id === active.id);
                const newIndex = prev.findIndex((i) => i.id === over.id);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={rectSortingStrategy}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <SortableCard key={item.id} id={item.id} data={item} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}