import GameIcon from '../assets/game-gaming-19-svgrepo-com.svg';
const Header = ({name}) => {
  return (
    <>
       <div className="relative z-30"></div>
<div className="bg-gradient-to-r from-[#00f0ff]/40 via-[#8e2de2]/40 to-[#4a00e0]/40 
  backdrop-blur-md 
  border-b border-cyan-300/50 
  shadow-[0_0_40px_#00f0ff88,0_0_80px_#8e2de288] 
  px-6 py-5 
  rounded-b-xl 
  flex items-center justify-between 
  text-white font-bold 
  tracking-wide 
  z-50">

        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white hidden sm:block tracking-wider neon-text-glow">
                WELCOME <span className="text-blue-600"></span>
        </p>
      <div className="flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
<img src={GameIcon} className="h-10 w-10 sm:h-12 sm:w-12 animate-pulse" alt="Game Icon" />
      <h1 className="ext-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest neon-text-glow">CYBOPUNK</h1>
</div>


       
    </div>
    </>
  )
}

export default Header
