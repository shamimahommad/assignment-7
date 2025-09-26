# React + Vite
What is JSX, and why is it used?
Ans: JSX এর পূর্ণরূপ হলো JavaScript XML। কেন JSX ব্যবহার করা হয়?
    সহজভাবে লেখা যায়: কোড দেখতে অনেক পরিষ্কার লাগে, HTML এর মতো।
    মিশ্রণ: একই জায়গায় HTML এর মতো স্ট্রাকচার আর JavaScript এর লজিক একসাথে ব্যবহার করা যায়।
    কম ভুল হয়: কোড বোঝা ও ঠিক করা সহজ হয়।
    Component বানানো সহজ হয়: পুনরায় ব্যবহারযোগ্য UI বানাতে সুবিধা হয়। 

What is the difference between State and Props?
Ans: State হলো কম্পোনেন্টের নিজের মান, যেটা সে নিজে পরিবর্তন করতে পারে; আর Props হলো বাইরে থেকে 
    পাওয়া ডেটা, যেটা শুধু ব্যবহার করতে পারে কিন্তু বদলাতে পারে না।

What is the useState hook, and how does it work?
Ans: useState hook হলো React‑এর একটা ফাংশন, যেটা কোন কম্পোনেন্টের ভেতরে ভ্যারিয়েবলকে state 
    আকারে ধরে রাখতে আর পরিবর্তন করতে দেয়। useState শুরুতে একটা মান সেট করে, আর পরে setter ফাংশনের মাধ্যমে সেই মান বদলালে React কম্পোনেন্টকে নতুন ডেটা নিয়ে আবার render করে।

How can you share state between components in React?
Ans: কম্পোনেন্টগুলোর মধ্যে state শেয়ার করতে হলে সেই state টা parent কম্পোনেন্টে তুলে 
    নিয়ে যেতে হয় , তারপর child কম্পোনেন্টগুলোতে Props আকারে পাঠিয়ে দেওয়া হয়। 

How is event handling done in React?
Ans:  React‑এ event handling করা হয় JSX এর মধ্যে attributes ব্যবহার করে যেমন onClick

