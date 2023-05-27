import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "About us" }];
};

export default function aboutUs () {
  return (
    <div className="flex flex-col items-center place-content-center  md:gap-32 md:my-6 gap-12 my-2 md:mx-32 mx-12">

      <div className="flex flex-row gap-12">
        <div className="flex flex-col gap-12">
        <h1 className="text-xl font-bold">
          Sedat Cakici
        </h1>
        <span className="">
            Hello World I'm Sedat Cakici <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aliquam repudiandae quae quis voluptates accusamus autem omnis optio ut, ab possimus recusandae esse neque at error fugit nostrum fuga eos similique sit eum sint enim. Mollitia molestias maiores quos repellat quaerat iusto illo eaque accusantium. Praesentium nisi provident cumque similique libero est debitis sequi quis sit non quod, laborum pariatur molestias sed reprehenderit iure nemo. Tenetur accusantium repellat deserunt atque earum modi adipisci cupiditate ipsam nobis temporibus, reprehenderit beatae ex, dolorem recusandae eius porro corporis ratione qui fugit expedita dicta, sequi delectus officia! Provident corrupti quae mollitia, ipsa ad eligendi.
        </span>
        </div>
      <img src="https://github.com/Cakici-Sedat.png" alt="" className="w-[35%] h-fit rounded-xl"/>
      </div>

      <div className="flex flex-row gap-12">
        <img src="https://github.com/hidirT.png" alt="" className="w-[35%] h-fit rounded-xl"  />
        <div className="flex flex-col gap-12">
        <h1 className="text-xl font-bold">
          Hidir Turay
        </h1>
        <span className="">
            Hello World I'm Hidir Turay <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aliquam repudiandae quae quis voluptates accusamus autem omnis optio ut, ab possimus recusandae esse neque at error fugit nostrum fuga eos similique sit eum sint enim. Mollitia molestias maiores quos repellat quaerat iusto illo eaque accusantium. Praesentium nisi provident cumque similique libero est debitis sequi quis sit non quod, laborum pariatur molestias sed reprehenderit iure nemo. Tenetur accusantium repellat deserunt atque earum modi adipisci cupiditate ipsam nobis temporibus, reprehenderit beatae ex, dolorem recusandae eius porro corporis ratione qui fugit expedita dicta, sequi delectus officia! Provident corrupti quae mollitia, ipsa ad eligendi.
        </span>
        </div>
      </div>


    </div>
  )
}