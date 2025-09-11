import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from ".";
import {
    Zap,
    Video,
    Folder,
    Users,
    Coffee,
} from "lucide-react";


const meta: Meta<typeof Navigation> = {
    title: "UI/Navigation",
    component: Navigation,
};
export default meta;


const navItems = [
    { icon: Zap, label: "All", selected: true },
    { icon: Video, label: "Videos" },
    { icon: Folder, label: "Projects" },
    { icon: Users, label: "Connections" },
    { icon: Coffee, label: "Connections", disabled: true },
];


export const WithText: StoryObj<typeof Navigation> = {
    render: () => <Navigation items={navItems} orientation="horizontal" />,
};


export const WithoutText: StoryObj<typeof Navigation> = {
    render: () => (
        <Navigation
            items={navItems.map((item) => ({ ...item, label: undefined }))}
            orientation="vertical"
        />
    ),
};