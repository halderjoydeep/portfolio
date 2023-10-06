"use client";

import Card from "./Card";
import ServiceCardWrapper from "./ServiceCardWrapper";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <ServiceCardWrapper index={index}>
      <Card icon={icon} title={title} />
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
