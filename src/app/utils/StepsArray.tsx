import InviteFriends from "../components/svgs/InviteFriends";
import CollectCoins from "../components/svgs/CollectCoins";
import GetVoucher from "../components/svgs/GetVoucher";

export const StepsArray = [
  {
    id: 1,
    svg: <InviteFriends />,
    step: "step 1",
    title: "Invite Friends",
    desc: "Refer friends with your unique referral link",
  },
  {
    id: 2,
    svg: <CollectCoins />,
    step: "step 2",
    title: "Collect Coins",
    desc: "Get 1 coin for each friend that installs out extension using your referral link",
  },
  {
    id: 3,
    svg: <GetVoucher />,
    step: "step 3",
    title: "Get Voucher",
    desc: "Redeem for a $20 hotel booking voucher once you collect 20 coins",
  },
];
