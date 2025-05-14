import { useTheme } from "@/components/theme/ThemeContext";
import { Switch } from "@/components/ui/switch";



function HomePage() {

    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <div>
            <h1 className="text-4xl font-bold">Soon it will be updated.</h1>
            <Switch 
                onClick={toggleTheme} 
                checked={isDark}
                className={`relative inline-flex h-7 w-12 items-center rounded-full`}
                thumbClassName='data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-[3px] w-5 h-5'
            />
        </div>
    );
}


export default HomePage;