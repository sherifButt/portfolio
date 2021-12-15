import Features_01 from "./variants/Features.shuffle.01";
import data from "../../siteData.config";

const { title, subtitle, ctaButton, subCta, features } =
   data?.features ? data.features : "";

const Features = ({
   variant,
   title,
   subtitle,
   ctaButton,
   subCta,
   features,
}) => {
   let html;

   switch (variant) {
      case 1:
         html = (
            <Features_01
               variant
               title={title}
               subtitle={subtitle}
               ctaButton={ctaButton}
               subCta={subCta}
               features={features}
            />
         );
         break;
      case 2:
         html = <Features_02 />;
         break;

      default:
         html = <Features_01 />;
         break;
   }

   return <>{html}</>;
};

Features.defaultProps = {
   variant: 1,
   title: title ? title : "I can do.",
   subtitle: subtitle ? subtitle : "this what i can do",
   ctaButton: ctaButton
      ? ctaButton
      : {
           enabled: true,
           text: "Sign up",
           textLight: "for free",
           icon: 8594,
        },
   subCta: subCta
      ? subCta
      : "Your own Dunder Mifflin account will serve you in the wonderful voyage through our products",
   features: features?features:[
         {
            path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
            title: "High durability",
            text: "Forget about paper jams with our increased stability product. Ideal for high-quality printing and photocopying.",
         },],
};

export default Features;
