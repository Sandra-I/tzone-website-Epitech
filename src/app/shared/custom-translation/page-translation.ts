type PageTranslation = {
    en: string[];
}

export type page = 'home' | 'download' | 'about' | 'premium' | 'mentions' | 'privacy' | 'terms' | 'cancel' | 'account'

type PageTranslations = {
    [key in page]: PageTranslation;
}

export const pageTranslations: PageTranslations = {
    home: {
        en: [
            'A need: retrieve the text present on an image or a video',
            'How to do it',
            'Tedious (or dull) version: manually copying the text',
            'Simple and efficient version (or easy)',
            "the tool you've always wanted",
            "Save time",
            "Avoid mistakes when copying",
            "Want to translate your text? No problem, with TZone you can kill two birds with one stone",
            "Check out our different offers to see what T-Zone is capable of",
            'Read more'
        ]
    },
    download: {
        en: []
    },
    about: {
        en: [
            'As students working in the web, we sometimes come across some code in the image.',
            `The problem is that is not possible to copy the text in the image directly.  We have decided
            to answer this problem by means of a
            through a chrome extension, which in a shortcut allows to copy a text from any content of a web page!
            of a web page !`,
            `And that's not all!`,
            "We have gone a step further by offering immediate translation of the retrieved text.",
            "Take a look at",
            "our offers",
            "to learn more"
        ]
    },
    premium: {
        en: [
            'Get started with the {name} package now!',
            'Subscribing to this package will cancel your current subscription to the {name} package',
            'Selecting an area and retrieving the contained text',
            'Preview of recovered text',
            'Retrieving copied text directly from the clipboard',
            'Recovery of the font used',
            'Copy history linked to the account, retrievable from anywhere',
            'Translation of the selected text into the chosen language',
            '{name} package',
            'BANK DETAILS',
            'Cardholder',
            'Thank you for your purchase'
        ]
    },
    cancel: {
        en: [
            'Are you sure you want to cancel your subscription to the {name} package?',
            'Your cancellation has been taken into account'
        ]
    },
    account: {
        en: [
            'Personal information',
            'Change registered',
            'Billing information',
            'Next payment',
            'You have no billing information'
        ]
    },
    mentions: {
        en: [
            `In accordance with the provisions of Articles 6-III and 19 of the French Law n°2004-575 of 21 June 2004 for the Confidence in the Digital Economy, called L.C.E.N., users and visitors, hereinafter the "User", of the website https://www.tzone.com or of the Tzone extension, hereinafter the "Website", are informed of the present legal notice.

            The connection and navigation on the Site by the User implies the full and unreserved acceptance of the present legal notice.
            
            These legal notices are available on the Site under the heading "Legal Notices".
            `,
            'ARTICLE 1 - THE PUBLISHER',
            `The editing and management of the publication of the Site is ensured by the TZone team, domiciled at 40 Bd de la Marquette, 31000 Toulouse, whose telephone number is 0707070707, and e-mail address contact@tzone.com.
 
            hereinafter the "Publisher".`,
            'ARTICLE 2 - THE HOST',
            `The Site's host is the company YamiKami_Sama Host, whose head office is located at Sama Boulevard, with the telephone number: 0606060606 and the contact email address contact@yamikami.fr`,
            'ARTICLE 3 - ACCESS TO THE SITE',
            `Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.

            En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.
            `,
            'ARTICLE 4 - DATA COLLECTION',
            `The site is exempt from declaration to the Commission Nationale Informatique et Libertés (CNIL) insofar as it does not collect any data concerning users.
 
            Any use, reproduction, distribution, marketing, modification of all or part of the Site, without the authorisation of the Editor, is prohibited and may lead to legal action and prosecution as provided for in particular by the Intellectual Property Code and the Civil Code.
            
            For more information, please refer to the Terms and Conditions of Use of the website https://www.tzone.com accessible under the heading "Terms and Conditions of Use". 
            For more information on the protection of personal data, please refer to the Charter on the protection of personal data of the site https://www.tzone.com accessible under the heading "Personal data".
            For more information on cookies, please refer to the Charter on cookies of the site https://www.tzone.com accessible under the heading "Cookies".`
        ]
    },
    privacy: {
        en: []
    },
    terms: {
        en: [
            `The purpose of these general terms and conditions of use is to provide a legal framework for the terms and conditions of provision of the site and services by TZone and to define the conditions of access and use of the services by the "User".
            
            Any registration or use of the site implies the user's acceptance of these terms without any reservation or restriction. When registering on the site via the Registration Form, each user expressly accepts these terms by ticking the box before the following text: "I acknowledge having read and understood the terms and I accept them".
            In the event of non-acceptance of the terms stipulated in this contract, the User must renounce access to the services offered by the site.
            https://www.tzone.com reserves the right to unilaterally modify the content of these terms at any time.`,
            'Article 1: The legal notices',
            `The publishing and management of the website https://www.tzone.com is provided by the TZone team, domiciled at 40 Bd de la Marquette, 31000 Toulouse.
            Telephone number is 0707070707
            E-mail address contact@tzone.com.
            
            The host of the site https://www.tzone.com is the company YamiKami_Sama Host, whose head office is located at Sama Boulevard, with the telephone number: 0606060606.`,
            'ARTICLE 2: Access to the site',
            `The website https://www.tzone.com provides the User with free access to the following services:
            The website offers the following services:
            Retrieval of the text present on a screenshot, putting the text in the clipboard, translation of the retrieved text into the desired language, history of the retrieved texts and user account
            The site is accessible free of charge anywhere to any User with Internet access. All costs incurred by the User in accessing the service (computer hardware, software, Internet connection, etc.) are at the User's expense.
            
            The non-member User does not have access to the reserved services. To do so, they must register by filling in the form. By agreeing to register for the reserved services, the member User undertakes to provide truthful and accurate information concerning his/her civil status and contact details, in particular his/her email address.
            To access the services, the User must then identify himself using his login and password which will be communicated to him after his registration.
            Any User who is a regularly registered member may also request to be removed from the list by going to the dedicated page on his personal space. This will be effective within a reasonable time.
            Any event due to a case of force majeure resulting in a malfunction of the site or server and subject to any interruption or modification in case of maintenance, does not engage the responsibility of https://www.tzone.com. In these cases, the User agrees not to hold the publisher responsible for any interruption or suspension of service, even without notice.
            The User has the possibility to contact the site by email at the email address of the publisher communicated in ARTICLE 1.`,
            'ARTICLE 3 : Collecte des données',
            `The site ensures that the User's personal information is collected and processed with respect for privacy in accordance with the French law n°78-17 of 6 January 1978 relating to information technology, files and freedom. The site is registered with the CNIL under the number xxxxxxxx.
            In accordance with the French Data Protection Act of 6 January 1978, the User has the right to access, rectify, delete and oppose his or her personal data. The User exercises this right via his personal space.`,
            'ARTICLE 4: Intellectual Property',
            `The brands, logos, signs and all the contents of the site (texts, images, sound, etc.) are protected by the Intellectual Property Code and more particularly by copyright.

            The TZone brand is a registered trademark of TZone SAS and any representation and/or reproduction and/or exploitation of this brand, in whole or in part, of any nature whatsoever, is totally prohibited.
            
            The User must request prior authorisation from the site for any reproduction, publication or copy of the various contents. The User undertakes to use the contents of the site in a strictly private context; any use for commercial or advertising purposes is strictly prohibited.
            Any total or partial representation of this site by any means whatsoever without the express authorisation of the website operator would constitute an infringement punishable by Article L 335-2 et seq. of the Intellectual Property Code.
            In accordance with article L122-5 of the Intellectual Property Code, it is reminded that the User who reproduces, copies or publishes protected content must cite the author and his source.
            `,
            'ARTICLE 5 : Responsibility',
            `The sources of the information published on the https://www.tzone.com website are deemed reliable, but the website does not guarantee that it is free of defects, errors or omissions.
            The information provided is presented for information purposes only and has no contractual value. Despite regular updates, the site https://www.tzone.com cannot be held responsible for changes in administrative and legal provisions occurring after publication. Similarly, the site cannot be held responsible for the use and interpretation of the information contained in this site.
            The User shall ensure that his/her password is kept secret. Any disclosure of the password, in whatever form, is prohibited. The User assumes all risks associated with the use of his/her login and password. The site declines all responsibility.
            The site https://www.tzone.com cannot be held responsible for any viruses that may infect the computer or any computer equipment of the Internet user, following use, access or downloading from this site.
            The site cannot be held responsible in the event of force majeure or the unforeseeable and insurmountable act of a third party.`,
            'ARTICLE 6: Hypertext links',
            `Hypertext links may be present on the site. The User is informed that by clicking on these links, he/she will leave the site https://www.tzone.com. The latter has no control over the web pages to which these links lead and cannot, under any circumstances, be held responsible for their content.
            `,
            'ARTICLE 7 : Cookies',
            `The User is informed that during his visits to the site, a cookie may be automatically installed on his browser.
            Cookies are small files temporarily stored on the hard disk of the User's computer by your browser and which are necessary for the use of the https://www.tzone.com website. Cookies do not contain any personal information and cannot be used to identify anyone. A cookie contains a unique, randomly generated and therefore anonymous identifier. Some cookies expire at the end of the User's visit, others remain.
            The information contained in the cookies is used to improve the https://www.tzone.com website.
            By browsing the site, the User accepts them.
            The User may deactivate these cookies by means of the settings in his/her browser software.`,
            'ARTICLE 8: Applicable law and jurisdiction',
            `French law applies to this contract. In the event of failure to resolve a dispute between the parties amicably, the French courts shall have sole jurisdiction to hear it.
            For any question relating to the application of these GTU, you can contact the publisher at the address and phone number listed in ARTICLE 1.
            `


        ]
    }
}