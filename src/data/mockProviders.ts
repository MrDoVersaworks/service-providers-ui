// src/data/mockProviders.ts
import { ServiceProvider } from "../types/types";

export const mockProviders: ServiceProvider[] = [
  {
    id: 1,
    name: "Mike's Roadside Repair",
    company: "Mike's Auto Services",
    specialty: "Tire & Battery",
    location: "Dallas, TX",
    email: "mike@autoservices.com",
    phone: "123-456-7890",
    contracts: [
      {
        id: "c1",
        client: "Fleet Logistics Ltd",
        services: ["Tire Replacement", "Battery Jumpstart"],
        slas: ["Response within 1 hour", "Payment within 24h"],
      },
    ],
    services: [
      { name: "Tire Replacement", price: 120 },
      { name: "Battery Jumpstart", price: 50 },
      { name: "Emergency Oil Change", price: 100 },
    ],
  },
  {
    id: 2,
    name: "Highway Tow Masters",
    company: "Tow Masters Inc",
    specialty: "Towing",
    location: "Chicago, IL",
    email: "dispatch@towmasters.com",
    phone: "987-654-3210",
    contracts: [
      {
        id: "c2",
        client: "Rapid Freight Co",
        services: ["Towing (up to 10 miles)", "Heavy-Duty Tow"],
        slas: ["Response within 90 mins", "Payment processed end of day"],
      },
    ],
    services: [
      { name: "Towing (up to 10 miles)", price: 200 },
      { name: "Heavy-Duty Tow", price: 500 },
    ],
  },
  {
    id: 3,
    name: "Express Mechanics",
    company: "Express Auto Mobile",
    specialty: "Engine & Brakes",
    location: "Atlanta, GA",
    email: "support@expressauto.com",
    phone: "555-222-1111",
    contracts: [
      {
        id: "c3",
        client: "National Trucking Co",
        services: ["Engine Diagnostics", "Brake Repair"],
        slas: ["Response within 2 hours", "Parts warranty 6 months"],
      },
    ],
    services: [
      { name: "Engine Diagnostics", price: 250 },
      { name: "Brake Repair", price: 400 },
    ],
  },
  {
    id: 4,
    name: "RoadRanger 24/7",
    company: "RoadRanger Assist",
    specialty: "Emergency Repairs",
    location: "Houston, TX",
    email: "contact@roadranger.com",
    phone: "321-555-6677",
    contracts: [
      {
        id: "c4",
        client: "LogiFleet Transport",
        services: ["Battery Jumpstart", "Tire Replacement"],
        slas: ["Response within 45 mins", "Payment processed weekly"],
      },
    ],
    services: [
      { name: "Battery Jumpstart", price: 60 },
      { name: "Tire Replacement", price: 110 },
    ],
  },
  {
    id: 5,
    name: "Mobile Mechanics Pro",
    company: "MMPro Services",
    specialty: "Fleet Repairs",
    location: "Los Angeles, CA",
    email: "help@mmpro.com",
    phone: "888-777-6666",
    contracts: [
      {
        id: "c5",
        client: "HaulNation Inc",
        services: ["Brake Repair", "Engine Diagnostics"],
        slas: ["Response under 2 hours", "Payment within 48h"],
      },
    ],
    services: [
      { name: "Brake Repair", price: 350 },
      { name: "Engine Diagnostics", price: 275 },
    ],
  },
  {
    id: 6,
    name: "TruckFix Now",
    company: "TruckFix Solutions",
    specialty: "Heavy-Duty Tow & Oil",
    location: "New York, NY",
    email: "support@truckfixnow.com",
    phone: "404-888-7777",
    contracts: [
      {
        id: "c6",
        client: "BigRig Haulers",
        services: ["Heavy-Duty Tow", "Emergency Oil Change"],
        slas: ["Response within 90 mins", "Parts warranty 12 months"],
      },
    ],
    services: [
      { name: "Heavy-Duty Tow", price: 600 },
      { name: "Emergency Oil Change", price: 130 },
    ],
  },
  {
    id: 7,
    name: "PitStop Mechanics",
    company: "PitStop Services",
    specialty: "General Repairs",
    location: "Miami, FL",
    email: "service@pitstop.com",
    phone: "555-000-1111",
    contracts: [
      {
        id: "c7",
        client: "RoadKing Logistics",
        services: ["Battery Jumpstart", "Tire Replacement", "Brake Repair"],
        slas: ["Response within 1 hour", "Payment on delivery"],
      },
    ],
    services: [
      { name: "Battery Jumpstart", price: 50 },
      { name: "Tire Replacement", price: 125 },
      { name: "Brake Repair", price: 400 },
    ],
  },
  {
    id: 8,
    name: "TowForce Fleet",
    company: "TowForce Inc",
    specialty: "Fleet Towing",
    location: "Phoenix, AZ",
    email: "dispatch@towforce.com",
    phone: "777-222-8888",
    contracts: [
      {
        id: "c8",
        client: "Global Freight Movers",
        services: ["Heavy-Duty Tow", "Towing (up to 50 miles)"],
        slas: ["Response within 2 hours", "Payment monthly"],
      },
    ],
    services: [
      { name: "Heavy-Duty Tow", price: 550 },
      { name: "Towing (up to 50 miles)", price: 700 },
    ],
  },
  {
    id: 9,
    name: "OnSite AutoFix",
    company: "OnSite Repair Co",
    specialty: "Mobile Repairs",
    location: "Seattle, WA",
    email: "info@onsiteautofix.com",
    phone: "999-333-1111",
    contracts: [
      {
        id: "c9",
        client: "NorthStar Transport",
        services: ["Brake Repair", "Engine Diagnostics", "Oil Change"],
        slas: ["Response within 3 hours", "Payment on completion"],
      },
    ],
    services: [
      { name: "Brake Repair", price: 380 },
      { name: "Engine Diagnostics", price: 260 },
      { name: "Oil Change", price: 110 },
    ],
  },
  {
    id: 10,
    name: "MechanicPro 360",
    company: "MechanicPro Services",
    specialty: "Full-Service Fleet",
    location: "Denver, CO",
    email: "contact@mechanicpro360.com",
    phone: "101-202-3030",
    contracts: [
      {
        id: "c10",
        client: "TransRoad Logistics",
        services: ["Battery Jumpstart", "Engine Diagnostics", "Brake Repair"],
        slas: ["Response under 2 hours", "Monthly invoice payment"],
      },
    ],
    services: [
      { name: "Battery Jumpstart", price: 45 },
      { name: "Engine Diagnostics", price: 300 },
      { name: "Brake Repair", price: 420 },
    ],
  },
];
