import GameIcon from '../assets/game-gaming-19-svgrepo-com.svg';
const Header = () => {
  return (
    <>
<div className="bg-[linear-gradient(115deg,#ED3500,#093FB4)] text-white min-h-[120px] px-6 py-4 flex items-center justify-between  shadow-lg">
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 dark:text-white/90 hidden sm:block">
                WELCOME <span className="text-blue-600"></span>
        </p>
      <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
<img src={GameIcon} className="h-10 w-10 sm:h-12 sm:w-12" alt="Game Icon" />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">CYBOPUNK</h1>
</div>
<button className="text-lg sm:text-xl text-white hover:scale-110 transition-transform duration-200 bg-[#2A2E5B] p-2 rounded-full border border-white/10 shadow-md hover:shadow-lg hover:bg-[#1E3C72]">
  🌙
</button>

       
    </div>

    </>
  )
}

export default Header
