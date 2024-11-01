import NavigationItem from "./navigationItem";

export default function NotificationsTab() {
    const messages = [
        {
            title: "Subscription Discount",
            message: "Kindly update your subscription & get a free tier plan",
            date: "3 mins"
        },
        {
            title: "Important Announcement",
            message: "Please be informed that our office will be closed on Monday.",
            date: "10 mins"
        },
        {
            title: "New Product Release",
            message: "Introducing our latest product: the SuperWidget X5000!",
            date: "15 mins"
        },
        {
            title: "Reminder: Meeting Tomorrow",
            message: "Don't forget about the team meeting scheduled for tomorrow at 10 AM.",
            date: "20 mins"
        },
        {
            title: "Holiday Closure Notice",
            message: "Our company will be closed for the holidays from December 24th to January 2nd.",
            date: "30 mins"
        },
        {
            title: "Update Your Profile",
            message: "Please update your profile information to ensure accuracy.",
            date: "35 mins"
        },
        {
            title: "Thank You for Your Feedback",
            message: "We appreciate your feedback on our recent product survey.",
            date: "40 mins"
        },
        {
            title: "System Maintenance Notice",
            message: "Our website will be undergoing scheduled maintenance tonight from 11 PM to 2 AM.",
            date: "45 mins"
        },
        {
            title: "Happy Birthday!",
            message: "Wishing a very happy birthday to our team member, John!",
            date: "50 mins"
        },
        {
            title: "New Feature Added",
            message: "Check out the latest feature we've added to our platform!",
            date: "55 mins"
        }
    ];
        
  return (
    <section className="my-4">
      <div className="flex flex-col">
        <h1 className="font-[700] text-[1.125rem]">Notification</h1>
        <p className="text-xs">we may still send you important notifications about your account outside of your notification settings.</p>
      </div>
      <div className="grid md:grid-cols-6 my-4">
        <div className="col-span-2 bg-white rounded-sm px-4">
            {
                messages.map(({
                    title,
                    message,
                    date,
                  }:any, index:any)=>(
                    <div className="cursor-pointer" key={index}>
                        <NavigationItem title={title} message={message} date={date}/>
                    </div>
                ))
            }
        </div>
        <div className="md:mr-2"></div>
      </div>
    </section>
  );
}
