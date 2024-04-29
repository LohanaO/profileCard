const Card = () => {
  return (
    <div className="text-white bg-[#242323] w-[386px] h-[439px] flex flex-col justify-center items-center gap-2 p-10">
        <div className="flex flex-col justify-center items-center gap-3">
      <div className=" bg-white  rounded-full mt-7 mb-2">
        <img src="./src/assets/img-Perfil.webp" alt="img-perfil" className=" rounded-full w-[146px] h-[146px]" style={{ objectFit: 'cover', objectPosition: 'center 5%' }} />
      </div>
      <h2 className="text-[#C2C2C2] text-lg font-bold font-montserrat">Lohana Orellano</h2>
      <div className="bg-[#1E1D1D] p-1 px-2 rounded-2xl flex justify-center items-center ">
        <h3 className="text-[#8A8A8A] font-montserrat font-[500] text-sm">Torregrotta, Italia</h3>
      </div>
      <p className="text-center font-montserrat text-[#C2C2C2] mt-5">Analista en sistemas y apasionada desarrolladora web enfocada al frontend!</p>
      </div>
      
    </div>
  );
};

export default Card;
