import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenu: DrawerItem[] = [];
  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
        },
        {
          title: "blog-Management",
          path: `/${role}/blog-management`,
        },
        {
          title: "Submit-Project",
          path: `/${role}/create-project`,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenu.push({
        title: "Manage Profile",
        path: `${role}/manageProfile`,
      });
      break;
  }
  return [...roleMenu];
};
