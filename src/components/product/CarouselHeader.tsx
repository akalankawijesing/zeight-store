
interface CarouselHeaderProps {
  title: string;
  categories: Category[];
  onCategorySelect: (categoryName: string) => void;
}

const CarouselHeader: React.FC<CarouselHeaderProps> = ({ title, categories, onCategorySelect }) => (
  <>
    <div className="header-wrapper">
      <header className="header-main">
        <h2 className="header-title text-2xl font-extrabold text-gray-900 mb-4">
          {title}
        </h2>
      </header>
    </div>

    {/* Categories Navigation (Horizontal Scrollable Tabs) */}
    <nav className="category-navigation mb-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
      <ul className="category-list flex space-x-3 pb-2">
        {categories.map((category) => (
          <li
            key={category.name}
            tabIndex={0}
            // Added transform and active:scale-95 for press animation
            className={`category-item inline-block py-2 px-4 rounded-full text-sm font-semibold cursor-pointer transition-all duration-150 transform active:scale-95 ${
              category.selected
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onCategorySelect(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export default CarouselHeader;

