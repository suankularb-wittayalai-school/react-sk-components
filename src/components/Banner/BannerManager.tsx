import { AnimatePresence } from "framer-motion";

// Components
import Banner from "./Banner";
import MaterialIcon from "../Icon";

// Types
import { BannerProps } from "./Banner";
import { LinkElement, SKComponent } from "../../utils/types";

export interface BannerManagerProps extends SKComponent {
  banners: (Omit<BannerProps, "LinkElement"> & { id: string })[];
  LinkElement?: LinkElement;
}

const BannerManager = ({
  banners,
  className,
  style,
}: BannerManagerProps): JSX.Element => {
  const banner: BannerManagerProps["banners"][0] | null =
    banners.find((banner) => banner.type == "warning") ||
    banners.find((banner) => banner.type == "notice") ||
    banners[0] ||
    null;

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {banners.length > 0 && (
        <Banner
          key={banner.id}
          id={banner.id}
          type={banner.type}
          icon={
            banner.icon ||
            (banner.type == "notice" ? (
              <MaterialIcon icon="warning" />
            ) : banner.type == "warning" ? (
              <MaterialIcon icon="error" />
            ) : (
              <MaterialIcon icon="info" />
            ))
          }
          title={banner.title}
          supportingText={banner.supportingText}
          actions={banner.actions}
          className={banner.className || className}
          style={banner.style || style}
        />
      )}
    </AnimatePresence>
  );
};

export default BannerManager;
