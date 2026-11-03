// Every screenshot, statically imported so next/image knows its size and can blur it in.
// Add a file to assets/shots, then add it here.
import barberCreate from "@/assets/shots/barber-create.png";
import barberDashboard from "@/assets/shots/barber-dashboard.png";
import barberHome from "@/assets/shots/barber-home.png";
import barberInvoices from "@/assets/shots/barber-invoices.png";
import barberPhoneCreate from "@/assets/shots/barber-phone-create.png";
import barberPhoneDashboard from "@/assets/shots/barber-phone-dashboard.png";
import barberPhoneHome from "@/assets/shots/barber-phone-home.png";
import barberPhoneInvoices from "@/assets/shots/barber-phone-invoices.png";
import barberPhoneReservations from "@/assets/shots/barber-phone-reservations.png";
import barberResCreate from "@/assets/shots/barber-res-create.png";
import barberReservations from "@/assets/shots/barber-reservations.png";
import mellowBrandkit from "@/assets/shots/mellow-brandkit.png";
import mellowCreate from "@/assets/shots/mellow-create.png";
import mellowEditor from "@/assets/shots/mellow-editor.png";
import mellowExport from "@/assets/shots/mellow-export.png";
import mellowGenerate from "@/assets/shots/mellow-generate.png";
import mellowLanding from "@/assets/shots/mellow-landing.png";
import mellowMel from "@/assets/shots/mellow-mel.png";
import mellowOutline from "@/assets/shots/mellow-outline.png";
import mellowPhoneBrandkit from "@/assets/shots/mellow-phone-brandkit.png";
import mellowPhoneCreate from "@/assets/shots/mellow-phone-create.png";
import mellowPhoneEditor from "@/assets/shots/mellow-phone-editor.png";
import mellowPhoneExport from "@/assets/shots/mellow-phone-export.png";
import mellowPhoneGenerate from "@/assets/shots/mellow-phone-generate.png";
import mellowPhoneLanding from "@/assets/shots/mellow-phone-landing.png";
import mellowPhoneMel from "@/assets/shots/mellow-phone-mel.png";
import mellowPhoneOutline from "@/assets/shots/mellow-phone-outline.png";
import mellowSettings from "@/assets/shots/mellow-settings.png";
import santoriniV1 from "@/assets/shots/santorini-v1.png";
import vayaDetail from "@/assets/shots/vaya-detail.png";
import vayaExplore from "@/assets/shots/vaya-explore.png";
import vayaHome from "@/assets/shots/vaya-home.png";
import vayaLogin from "@/assets/shots/vaya-login.png";
import vayaPlan from "@/assets/shots/vaya-plan.png";
import vayaProfile from "@/assets/shots/vaya-profile.png";
import vayaTrips from "@/assets/shots/vaya-trips.png";
import zapCart from "@/assets/shots/zap-cart.png";
import zapCheckout from "@/assets/shots/zap-checkout.png";
import zapDsCard from "@/assets/shots/zap-ds-card.png";
import zapDsColors from "@/assets/shots/zap-ds-colors.png";
import zapDsForm from "@/assets/shots/zap-ds-form.png";
import zapDsType from "@/assets/shots/zap-ds-type.png";
import zapHome from "@/assets/shots/zap-home.png";
import zapLogin from "@/assets/shots/zap-login.png";
import zapOnboard1 from "@/assets/shots/zap-onboard-1.png";
import zapOnboard2 from "@/assets/shots/zap-onboard-2.png";
import zapOnboard3 from "@/assets/shots/zap-onboard-3.png";
import zapOrderDetail from "@/assets/shots/zap-order-detail.png";
import zapOrders from "@/assets/shots/zap-orders.png";
import zapPayment from "@/assets/shots/zap-payment.png";
import zapPdp from "@/assets/shots/zap-pdp.png";
import zapSearch from "@/assets/shots/zap-search.png";
import zapSplash from "@/assets/shots/zap-splash.png";

export const shots = {
  "barber-create": barberCreate,
  "barber-dashboard": barberDashboard,
  "barber-home": barberHome,
  "barber-invoices": barberInvoices,
  "barber-phone-create": barberPhoneCreate,
  "barber-phone-dashboard": barberPhoneDashboard,
  "barber-phone-home": barberPhoneHome,
  "barber-phone-invoices": barberPhoneInvoices,
  "barber-phone-reservations": barberPhoneReservations,
  "barber-res-create": barberResCreate,
  "barber-reservations": barberReservations,
  "mellow-brandkit": mellowBrandkit,
  "mellow-create": mellowCreate,
  "mellow-editor": mellowEditor,
  "mellow-export": mellowExport,
  "mellow-generate": mellowGenerate,
  "mellow-landing": mellowLanding,
  "mellow-mel": mellowMel,
  "mellow-outline": mellowOutline,
  "mellow-phone-brandkit": mellowPhoneBrandkit,
  "mellow-phone-create": mellowPhoneCreate,
  "mellow-phone-editor": mellowPhoneEditor,
  "mellow-phone-export": mellowPhoneExport,
  "mellow-phone-generate": mellowPhoneGenerate,
  "mellow-phone-landing": mellowPhoneLanding,
  "mellow-phone-mel": mellowPhoneMel,
  "mellow-phone-outline": mellowPhoneOutline,
  "mellow-settings": mellowSettings,
  "santorini-v1": santoriniV1,
  "vaya-detail": vayaDetail,
  "vaya-explore": vayaExplore,
  "vaya-home": vayaHome,
  "vaya-login": vayaLogin,
  "vaya-plan": vayaPlan,
  "vaya-profile": vayaProfile,
  "vaya-trips": vayaTrips,
  "zap-cart": zapCart,
  "zap-checkout": zapCheckout,
  "zap-ds-card": zapDsCard,
  "zap-ds-colors": zapDsColors,
  "zap-ds-form": zapDsForm,
  "zap-ds-type": zapDsType,
  "zap-home": zapHome,
  "zap-login": zapLogin,
  "zap-onboard-1": zapOnboard1,
  "zap-onboard-2": zapOnboard2,
  "zap-onboard-3": zapOnboard3,
  "zap-order-detail": zapOrderDetail,
  "zap-orders": zapOrders,
  "zap-payment": zapPayment,
  "zap-pdp": zapPdp,
  "zap-search": zapSearch,
  "zap-splash": zapSplash,
};

export type ShotKey = keyof typeof shots;
