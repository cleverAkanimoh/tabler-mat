import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface FeedbackCardProps {
  title: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ title }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add content or statistics here as needed */}
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
