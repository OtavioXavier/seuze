
interface CategoryCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

export default function CategoryCard({ title, icon: Icon, description }: CategoryCardProps) {
    return (
        <div className="w-72 h-36 bg-white rounded-2xl flex justify-between p-4 shadow-md">
            <div>
                <h1 className="text-emerald-950 font-semibold text-lg">
                    {title}
                </h1>
                <p className="text-sm text-stone-800">{description}</p>
            </div>
            <div className="text-emerald-500 flex items-baseline-last">
                <Icon size={72} />
            </div>
        </div>
    )
}