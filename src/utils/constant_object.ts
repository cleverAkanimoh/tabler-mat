export const registerInputProps = [
  {
    type: "grid",
    gridInputs: [
      {
        name: "companyName",
        type: "text",
        label: "Company Name",
        placeholder: "Company name",
      },
      {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Email",
        //   notImportant: true,
      },
      {
        name: "companyPhoneNumber",
        type: "text",
        label: "Company Phone Number",
        placeholder: "000-000-00000",
      },
      {
        name: "companyLocation",
        type: "text",
        label: "Company Location",
        placeholder: "Location here...",
      },
      {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Create password",
      },
      {
        name: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        placeholder: "Confirm password",
      },
    ],
  },
];

export const loginInputProps = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Create password",
  },
];

export const verifyPasswordInputProps = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter a valid Email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Create new password",
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm new password",
  },
];

export const selectPlanCard = [
  {
    amount: "$20",
    plan: "Intro",
    description: "For most businesses that want to otpimize web queries",
    list: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    action: (setState: any) => setState(true),
  },
  {
    amount: "50",
    plan: "Base",
    description: "For most businesses that want to otpimize web queries",
    list: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    action: (setState: any) => setState(true),
  },
  {
    amount: "$100",
    plan: "Pro",
    description: "For most businesses that want to otpimize web queries",
    list: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    action: (setState: any) => setState(true),
  },
  {
    amount: "$200",
    plan: "Enterprise",
    description: "For most businesses that want to otpimize web queries",
    list: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    action: (setState: any) => setState(true),
  },
];

export const profileNavData = [
  {
    id: 2,
    name: "Settings",
    // icon: CogIcon({ property: "outline", style: "mr-2" }),
    type: "link",
    path: "/settings",
  },
  {
    id: 3,
    name: "Log Out",
    // icon: PowerIcon({ property: "outline", style: "mr-2 text-red-500" }),
    type: "itemClickCallbacks",
    function: () => {},
  },
];

export const profileInputProps = [
  {
    type: "grid",
    gridInputs: [
      {
        name: "companyName",
        type: "text",
        label: "Company Name",
        placeholder: "Company name",
      },
      {
        name: "companyUrl",
        type: "text",
        label: "Company Url",
        placeholder: "Company url",
      },
      {
        name: "CompanyEmailAddress",
        type: "email",
        label: "Company Email Address",
        placeholder: "company@mail.com",
      },
      {
        name: "linkGoogleProfile",
        type: "text",
        label: "Link Google Profile",
        placeholder: "Link...",
      },
    ],
  },
];

export const securityInputProps = [
  {
    type: "grid",
    gridInputs: [
      {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "*********",
      },
      {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Email",
      },
    ],
  },
  {
    name: "recoveryEmail",
    type: "email",
    label: "Recovery Email",
    placeholder: "company@mail.com",
  },
];

type Payment = {
  id: string;
  orderId: string;
  date: string;
  amount: number;
  totalQuestions: number;
  status: string;
};

type PaymentCampaign = {
  id: string;
  campaignName: string;
  amount: number;
  platform: string;
  status: string;
  startDate: string;
  dueDate: string;
};

type discountTableType = {
  id: string;
  keywords: string;
  clicks: string;
  impressions: string;
  AverageCPC: string;
  allConversions: string;
};

export const tabledData: Payment[] = [
  {
    id: "1",
    orderId: "#153587",
    date: "Mar 18th, 2024",
    amount: 100,
    totalQuestions: 2,
    status: "rejected",
  },
  {
    id: "2",
    orderId: "#153588",
    date: "Apr 1st, 2024",
    amount: 150,
    totalQuestions: 3,
    status: "success",
  },
  {
    id: "3",
    orderId: "#153589",
    date: "Apr 5th, 2024",
    amount: 200,
    totalQuestions: 4,
    status: "rejected",
  },
  {
    id: "4",
    orderId: "#153590",
    date: "Apr 10th, 2024",
    amount: 75,
    totalQuestions: 1,
    status: "success",
  },
  {
    id: "5",
    orderId: "#153591",
    date: "Apr 15th, 2024",
    amount: 300,
    totalQuestions: 6,
    status: "rejected",
  },
  {
    id: "6",
    orderId: "#153592",
    date: "Apr 20th, 2024",
    amount: 120,
    totalQuestions: 2,
    status: "pending",
  },
  {
    id: "7",
    orderId: "#153593",
    date: "Apr 25th, 2024",
    amount: 180,
    totalQuestions: 3,
    status: "rejected",
  },
  {
    id: "8",
    orderId: "#153594",
    date: "Apr 30th, 2024",
    amount: 90,
    totalQuestions: 2,
    status: "rejected",
  },
  {
    id: "9",
    orderId: "#153595",
    date: "May 5th, 2024",
    amount: 250,
    totalQuestions: 5,
    status: "success",
  },
  {
    id: "10",
    orderId: "#153596",
    date: "May 10th, 2024",
    amount: 180,
    totalQuestions: 3,
    status: "rejected",
  },
  {
    id: "11",
    orderId: "#159598",
    date: "Apr 1st, 2024",
    amount: 150,
    totalQuestions: 3,
    status: "rejected",
  },
  {
    id: "12",
    orderId: "#151354",
    date: "Apr 5th, 2024",
    amount: 200,
    totalQuestions: 4,
    status: "success",
  },
];

export const campaignTabledData: PaymentCampaign[] = [
  {
    id: "12",
    campaignName: "#151354",
    amount: 200,
    platform: "Facebook",
    status: "running",
    startDate: "Apr 5th, 2024",
    dueDate: "Apr 5th, 2024",
  },
  {
    id: "13",
    campaignName: "#151355",
    amount: 150,
    platform: "Instagram",
    status: "closed",
    startDate: "Apr 1st, 2024",
    dueDate: "Apr 2nd, 2024",
  },
  {
    id: "14",
    campaignName: "#151356",
    amount: 300,
    platform: "Google Ads",
    status: "running",
    startDate: "Apr 3rd, 2024",
    dueDate: "Apr 4th, 2024",
  },
  {
    id: "15",
    campaignName: "#151357",
    amount: 250,
    platform: "Twitter",
    status: "closed",
    startDate: "Apr 5th, 2024",
    dueDate: "Apr 5th, 2024",
  },
  {
    id: "16",
    campaignName: "#151358",
    amount: 100,
    platform: "LinkedIn",
    status: "running",
    startDate: "Apr 6th, 2024",
    dueDate: "Apr 6th, 2024",
  },
  {
    id: "17",
    campaignName: "#151359",
    amount: 400,
    platform: "Snapchat",
    status: "closed",
    startDate: "Apr 7th, 2024",
    dueDate: "Apr 8th, 2024",
  },
  {
    id: "18",
    campaignName: "#151360",
    amount: 500,
    platform: "Pinterest",
    status: "running",
    startDate: "Apr 8th, 2024",
    dueDate: "Apr 9th, 2024",
  },
  {
    id: "19",
    campaignName: "#151361",
    amount: 350,
    platform: "TikTok",
    status: "closed",
    startDate: "Apr 10th, 2024",
    dueDate: "Apr 11th, 2024",
  },
  {
    id: "20",
    campaignName: "#151362",
    amount: 450,
    platform: "YouTube",
    status: "running",
    startDate: "Apr 12th, 2024",
    dueDate: "Apr 13th, 2024",
  },
  {
    id: "21",
    campaignName: "#151363",
    amount: 600,
    platform: "Reddit",
    status: "closed",
    startDate: "Apr 14th, 2024",
    dueDate: "Apr 15th, 2024",
  },
  {
    id: "22",
    campaignName: "#151364",
    amount: 700,
    platform: "Quora",
    status: "running",
    startDate: "Apr 16th, 2024",
    dueDate: "Apr 17th, 2024",
  },
];

export const discountTabledData: discountTableType[] = [
  {
    id: "1",
    keywords: "Discount Sales",
    clicks: "678 Clicks",
    impressions: "643 Impressions",
    AverageCPC: "50.00 AED",
    allConversions: "434 Conversions",
  },
  {
    id: "2",
    keywords: "Clearance Offers",
    clicks: "512 Clicks",
    impressions: "890 Impressions",
    AverageCPC: "30.00 AED",
    allConversions: "350 Conversions",
  },
  {
    id: "3",
    keywords: "Holiday Deals",
    clicks: "789 Clicks",
    impressions: "1200 Impressions",
    AverageCPC: "45.00 AED",
    allConversions: "500 Conversions",
  },
  {
    id: "4",
    keywords: "Flash Sale",
    clicks: "650 Clicks",
    impressions: "700 Impressions",
    AverageCPC: "40.00 AED",
    allConversions: "420 Conversions",
  },
  {
    id: "5",
    keywords: "New Year Discount",
    clicks: "800 Clicks",
    impressions: "1500 Impressions",
    AverageCPC: "55.00 AED",
    allConversions: "600 Conversions",
  },
  {
    id: "6",
    keywords: "Black Friday Sale",
    clicks: "900 Clicks",
    impressions: "2000 Impressions",
    AverageCPC: "60.00 AED",
    allConversions: "700 Conversions",
  },
  {
    id: "7",
    keywords: "Summer Sale",
    clicks: "400 Clicks",
    impressions: "500 Impressions",
    AverageCPC: "25.00 AED",
    allConversions: "300 Conversions",
  },
  {
    id: "8",
    keywords: "Winter Clearance",
    clicks: "550 Clicks",
    impressions: "800 Impressions",
    AverageCPC: "35.00 AED",
    allConversions: "380 Conversions",
  },
  {
    id: "9",
    keywords: "Back to School Deals",
    clicks: "600 Clicks",
    impressions: "900 Impressions",
    AverageCPC: "38.00 AED",
    allConversions: "400 Conversions",
  },
  {
    id: "10",
    keywords: "End of Season Sale",
    clicks: "720 Clicks",
    impressions: "1000 Impressions",
    AverageCPC: "42.00 AED",
    allConversions: "450 Conversions",
  },
  {
    id: "11",
    keywords: "Mega Sale",
    clicks: "850 Clicks",
    impressions: "1300 Impressions",
    AverageCPC: "48.00 AED",
    allConversions: "560 Conversions",
  },
];

export const chartNavData = [
  {
    id: 1,
    name: "Clicks",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 2,
    name: "Impressions",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 3,
    name: "Costs",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 4,
    name: "Conversions",
    type: "moreDropDownData",
    function: () => conversionsNavData,
  },
  {
    id: 5,
    name: "CTR",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 6,
    name: "Interactions",
    type: "itemClickCallbacks",
    function: () => "",
  },
];

const conversionsNavData = [
  {
    id: 1,
    name: "Purchase/Sales",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 2,
    name: "Sign-up",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 3,
    name: "Views of a key page",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 4,
    name: "Phone call leads",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 5,
    name: "Contacts",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 6,
    name: "Submit lead forms",
    type: "itemClickCallbacks",
    function: () => "",
  },
  {
    id: 7,
    name: "Downloads",
    type: "itemClickCallbacks",
    function: () => "",
  },
];

export const AreaChartData = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "9",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "11",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "12",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
