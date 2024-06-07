import Image from "next/image";
import { routes as NavBarData } from "@/_data";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import logo from "@/public/images/logo.avif";

const DesktopNavBar = ({ handleShowCart }) => {
  // const buffer = await fs.
  const path = usePathname();
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  return (
    <div className="hidden w-full max-w-7xl px-7 lg:flex items-center justify-between mx-auto">
      <div className="w-32 h-20 relative">
        <Image
          src={logo}
          alt="logo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          className="object-contain"
        />
      </div>
      <ul className="flex items-center justify-center gap-10 me-auto ms-32 font-thin">
        {NavBarData.map((item) => (
          <li
            key={item.id}
            // onClick={closeMobileNav}
            className={`${
              item.page === path && "text-genesis-red font-bold"
            } font-semibold`}
          >
            <Link href={item.page}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-5">
        <div className="p-5 bg-white shadow-sm rounded-full">
          <IoPersonOutline size={20} />
        </div>
        <div
          className="p-5 bg-white shadow-sm rounded-full cursor-pointer relative"
          onClick={handleShowCart}
        >
          <RiShoppingBasket2Line size={20} />
          {cartQuantity > 0 && (
            <div className="absolute font-semibold left-8 right-0 -top-2 bottom-0 text-xs bg-genesis-red h-fit w-fit py-1.5 px-3 rounded-full text-white">
              <p>{cartQuantity}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavBar;
