import Image from "next/image";
import MenuButton from "./MenuButton";
import { getPages } from "./loadFiles";
import { css } from "@/styled-system/css";

export default function Header() {
  const pages = getPages();

  return (
    <header
      className={css({
        height: "40px",
        padding: "0 10px",
        backgroundColor: "primary.500",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      })}
    >
      <Image src="/logo/set.webp" width={40} height={40} alt="sysken logo" />
      {pages.map((page) => (
        <MenuButton
          place="header"
          text={page.meta.title}
          path={page.path}
          key={page.id}
        />
      ))}
    </header>
  );
}
