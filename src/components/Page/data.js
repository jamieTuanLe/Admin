import React from "react";
import FeedIcon from "/public/svgs/feed";
import TransactionIcon from "/public/svgs/transaction";

export const MenuData = [
  { href: "/manage-posts", icon: <FeedIcon />, title: "Quản lý bài đăng", breadCrumb: "Danh sách bài đăng" },
  { href: "/manage-verify", icon: <TransactionIcon />, title: "Quản lý xác thực", breadCrumb: "Xác thực bài đăng" },
];
