import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";

const Navbar = async () => {
  const categories = await getCategories();
  //relative px-4 sm:px-6 lg:px-8 flex h-16 items-center

  return ( 
    <div className="border-b bg-black">
      <Container>
        <div className="relative flex h-28 items-center grid grid-cols-3 gap-4 place-items-center">
          <div>
          
          <MainNav data={categories} />
          </div>
          <div>
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <Image src="/Equinox.png"
              alt="" 
              width={200}
              height={100 }
              className="flex-none"
            />
          </Link>
          
          </div>
            
          <div>
          <NavbarActions />
          </div>
          
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
