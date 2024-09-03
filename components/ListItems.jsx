import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const ListItem = ({ title, href, children }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;
