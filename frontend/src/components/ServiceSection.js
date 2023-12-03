import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ServiceSection.css';

function SupportFAQs() {
    return (
        <section id="support-faqs">
            <h2>Support FAQs</h2>
            <nav>
                <ul>
                    <li><a href="#support-faqs">Support FAQs</a></li>
                    {/* Add links to support FAQs here */}
                </ul>
            </nav>
            {/* Add frequently asked questions and answers here */}
        </section>
    );
}

function CustomerSupportForums() {
    return (
        <section id="customer-forums">
            <h2>Customer Support Forums</h2>
            <nav>
                <ul>
                    <li><a href="#customer-forums">Customer Support Forums</a></li>
                    {/* Add links and descriptions for support forums */}
                </ul>
            </nav>
            {/* Include links and descriptions for support forums */}
        </section>
    );
}

function InstructionalVideos() {
    return (
        <section id="instructional-videos">
            <h2>Instructional Videos</h2>
            <nav>
                <ul>
                    <li><a href="#instructional-videos">Instructional Videos</a></li>
                    {/* Add links and descriptions for support forums */}
                </ul>
            </nav>
            {/* Include links and descriptions for support forums */}
        </section>
    );
}

function InformationalNewsletters() {
    return (
        <section id="informational-newsletters">
            <h2>Informational Newsletters</h2>
            <nav>
                <ul>
                    <li><a href="#informational-newsletters">Informational Newsletters</a></li>
                    {/* Add links and descriptions for support forums */}
                </ul>
            </nav>
            {/* Include links and descriptions for support forums */}
        </section>
    );
}

function Webinars() {
    return (
        <section id="webinars">
            <h2>Webinars (Live and Archived)</h2>
            <nav>
                <ul>
                    <li><a href="#webinars">Webinars (Live and Archived)</a></li>
                    {/* Add links and descriptions for support forums */}
                </ul>
            </nav>
            {/* Include links and descriptions for support forums */}
        </section>
    );
}

function RequestForms() {
    return (
        <section id="request-forms">
            <h2>Request Forms</h2>
            <nav>
                <ul>
                    <li><a href="#request-forms">Request Forms</a></li>
                    {/* Add links and descriptions for support forums */}
                </ul>
            </nav>
            {/* Include links and descriptions for support forums */}
        </section>
    );
}

function OnlineCourses() {
    return (
        <section id="online-courses">
            <h2>Online Courses</h2>
            <nav>
                <ul>
                    <li><a href="#online-courses"> Online Courses</a></li>
                    {/* Add links and descriptions for support forums */}
                </ul>
            </nav>
            {/* Include links and descriptions for support forums */}
        </section>
    );
}

function SocialUpdates() {
    return (
        <section id="social-updates">
            <h2>Social Updates</h2>
            <nav>
                <ul>
                    <li><a href="#social-updates"> Social Updates </a></li>
                    {/* Add links and descriptions for support forums */}
                </ul>
            </nav>
            {/* Include links and descriptions for support forums */}
        </section>
    );
}

// ... other components for different sections

function ServiceSection() {
  return (
    <div>
        <SupportFAQs />
        <CustomerSupportForums />
        <InstructionalVideos/>
        <InformationalNewsletters/>
        <Webinars/>
        <RequestForms/>
        <OnlineCourses/>
        <SocialUpdates/>
    </div>
  );
}

export default ServiceSection;