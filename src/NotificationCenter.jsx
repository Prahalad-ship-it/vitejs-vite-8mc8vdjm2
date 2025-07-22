import {useState} from "react";

export default function NotificationCenter({ message, show }) {
    const [visible, setVisible] = useState(show);
  
    useEffect(() => {
      if (show) {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 3000); // auto-close after 3s
        return () => clearTimeout(timer);
      }
    }, [show]);
  
    return (
      visible && (
        <div className="fixed bottom-6 right-6 bg-orange-200 border-l-4 border-red-500 text-black p-4 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )
    );
  }