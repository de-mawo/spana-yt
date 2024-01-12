const Container = ({ children }:{
    children: React.ReactNode
}) => {
  return ( 
    <div
      className="
        max-w-[2520px]
        mx-auto
        md:px-10
        sm:px-2
        px-4
      "
    >
      {children}
    </div>
   );
}
 
export default Container;