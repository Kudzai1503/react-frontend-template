import {UserGroupIcon} from "@heroicons/react/24/outline";

export const nav_items = [

    {name: 'Home',location:'/',id:'1'},
    {name: 'About',location:'/about',id:'2'},
    {name: 'Contact',location:'/contact',id:'3'},
];

export const dashboard_nav_items ={
    sideBar: [
        {name:'Dashboard',location:'/dashboard',id:'1',Icon: UserGroupIcon},
        {name:'Customers',location:'/dashboard/customers',id:'2',Icon: UserGroupIcon},
        {name:'Orders',location:'/dashboard/orders',id:'3',Icon: UserGroupIcon},
        {name:'Customers',location:'/dashboard/customers',id:'4',Icon: UserGroupIcon}
    ],
    navBar:[
        {name:'Home',location:'/dashboard',id:'1',Icon: UserGroupIcon},
        {name:'Profile',location:'dashboard/profile',id:'2',Icon: UserGroupIcon}
    ]

}