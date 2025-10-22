import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Country {
  name: string;
  id: string;
  serviceProvider?: string;
  address?: string[];
  altProvider?: string;
  altAddress?: string[];
  altDescription?: string;
  terms: string[];
  marketplace: string;
  additionalInfo?: string;
}

interface SidebarLink {
  title: string;
  active?: boolean;
  url?: string;
}

@Component({
  selector: 'app-terms-condition',
  imports: [CommonModule, FormsModule],
  templateUrl: './terms-condition.html',
  styleUrl: './terms-condition.scss'
})
export class TermsCondition{
  searchQuery: string = '';
  filteredCountries: Country[] = [];
  showSearchResults: boolean = false;

  countries: Country[] = [
    {
      name: 'Australia',
      id: 'australia',
      serviceProvider: 'Amazon Commercial Services Pty Ltd ABN 30 616 935 623',
      address: ['Level 37, 2 Park Street', 'Sydney NSW 2000'],
      altProvider: 'Amazon.com Services LLC',
      altAddress: ['C/O Amazon.com', 'Attn: Legal Department', '410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A.'],
      altDescription: 'All other customers in Australia',
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Conditions of Use',
        'Privacy Notice',
        'Interest-Based Ads Policy',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.primevideo.com'
    },
    {
      name: 'Brazil',
      id: 'brazil',
      serviceProvider: 'Amazon Serviços de Varejo do Brasil Ltda.',
      address: ['Av. Presidente Juscelino Kubitschek, 2.041,', 'Torre E, 18o andar 04543-000', 'São Paulo- SP'],
      altProvider: 'Amazon.com Services LLC',
      altAddress: ['C/O Amazon.com', 'Attn: Legal Department', '410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A.'],
      altDescription: 'All other customers in Brazil',
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Conditions of Use',
        'Privacy Notice',
        'Interest-Based Ads Policy',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.primevideo.com'
    },
    {
      name: 'Canada',
      id: 'canada',
      serviceProvider: 'Amazon.com.ca ULC',
      address: ['40 King Street West, 47th Floor', 'Toronto, ON M5H 3Y2'],
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Conditions of Use',
        'Privacy Notice',
        'Cookies Notice',
        'Interest-Based Ads Policy',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.amazon.ca'
    },
    {
      name: 'Egypt',
      id: 'egypt',
      serviceProvider: 'Souq.com for E-Commerce LLC',
      address: ['306 Corniche El Nile', 'Maadi, Egypt'],
      additionalInfo: 'Media Service Provider',
      altProvider: 'Amazon.com Services LLC',
      altAddress: ['C/O Amazon.com', 'Attn: Legal Department', '410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A'],
      altDescription: 'All other customers in Egypt',
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Conditions of Use',
        'Privacy Notice',
        'Interest-Based Ads',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.primevideo.com'
    },
    {
      name: 'European Union',
      id: 'eu',
      serviceProvider: 'Amazon Digital UK Ltd',
      address: ['1 Principal Place, Worship Street', 'London, EC2A 2FA', 'Company registered number: 6528297'],
      additionalInfo: 'Direct or indirect owner and ultimate beneficial owner: Amazon.com Inc., 410 Terry Avenue North, Seattle, WA 98109, USA',
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Terms of Use (for Poland)',
        'Amazon Prime Video Usage Rules',
        'Conditions of Use & Sale',
        'Privacy Notice',
        'Cookies Notice',
        'Cookies and Advertising Choices',
        'Interest-Based Ads Notice',
        'Information on selection, sorting and arrangement of content (Germany only)',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)',
        'Discounted Monthly Subscription with Commitment Terms & Conditions'
      ],
      marketplace: 'www.amazon.de (Germany/Austria) / www.primevideo.com (rest of EU)'
    },
    {
      name: 'Japan',
      id: 'japan',
      serviceProvider: 'Amazon.com Sales, Inc.',
      address: ['410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A.'],
      terms: [
        'Amazon Prime Video 利用規約',
        'Amazon Prime Video 使用規則',
        '利用規約',
        'プライバシー規約',
        'パーソナライズド広告規約',
        'Twitchサービス利用規約 (if you use any Twitch Prime benefit)',
        'NHKオンデマンド規約 (if you use any NHK On Demand service)',
        'コミットメント付き月額割引サブスクリプション'
      ],
      marketplace: 'www.amazon.co.jp'
    },
    {
      name: 'India',
      id: 'india',
      serviceProvider: 'Amazon Seller Services Private Limited',
      address: ['Ground Floor', 'Eros Plaza, Eros Corporate Tower', 'Nehru Place', 'New Delhi 110019'],
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Conditions of Use & Sale',
        'Privacy Notice',
        'Interest-Based Ads',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)',
        'Report a Content Grievance'
      ],
      marketplace: 'www.primevideo.com'
    },
    {
      name: 'Kingdom of Saudi Arabia',
      id: 'saudi',
      serviceProvider: 'Afaq Q Tech General Trading Co.',
      address: ['C/O Amazon.com', 'Building No. 3627, 8166 King Khalid International Airport', 'Postal Code 13413 Riyadh', 'Kingdom of Saudi Arabia'],
      altProvider: 'Amazon.com Services LLC',
      altAddress: ['C/O Amazon.com', 'Attn: Legal Department', '410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A.'],
      altDescription: 'All other customers in the Kingdom of Saudi Arabia',
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Conditions of Use',
        'Privacy Notice',
        'Interest-Based Ads',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.amazon.sa'
    },
    {
      name: 'Mexico',
      id: 'mexico',
      serviceProvider: 'Servicios Comerciales Amazon México, S. de R.L. de C.V.',
      address: ['Boulevard Manuel Ávila Camacho 261, Piso 5', 'Colonia Polanco', 'C.P. 11510 Alcaldía Miguel Hidalgo', 'Ciudad de México, México'],
      altProvider: 'Amazon.com Services LLC',
      altAddress: ['C/O Amazon.com', 'Attn: Legal Department', '410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A.'],
      altDescription: 'All other customers in Mexico',
      terms: [
        'Condiciones de Uso de Amazon Prime Video',
        'Reglas de Uso de Amazon Prime Video',
        'Condiciones de Uso',
        'Aviso de privacidad de Amazon.com.mx',
        'Condiciones del Servicio Twitch Prime (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.amazon.com.mx'
    },
    {
      name: 'Singapore',
      id: 'singapore',
      serviceProvider: 'Amazon Asia-Pacific Holdings Private Limited',
      address: ['23 Church Street', 'Capital Square Building, 10th Floor', 'Singapore 049481'],
      altProvider: 'Amazon.com Services LLC',
      altAddress: ['C/O Amazon.com', 'Attn: Legal Department', '410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A.'],
      altDescription: 'All other customers in Singapore',
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Condition of Use & Sale',
        'Privacy Notice',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.amazon.com.sg'
    },
    {
      name: 'Turkey',
      id: 'turkey',
      serviceProvider: 'Amazon Turkey Perakende Hizmetleri Limited Şirketi',
      address: ['Esentepe Mah. Bahar Sok. No.13', '52 Şişli, İstanbul'],
      altProvider: 'Amazon Turkey Video Dijital Yayıncılık Anonim Şirketi',
      altAddress: ['Esentepe Mahallesi Bahar Sk. Özdilek', 'River Plaza', 'Wyndham Grand Hotel Apt. No: 13', '52 Şişli, Istanbul'],
      altDescription: 'All other customers in Turkey',
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Condition of Use & Sale',
        'Privacy Notice',
        'Cookies Notice',
        'Interest-Based Ads Notice',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.amazon.com.tr'
    },
    {
      name: 'United Arab Emirates',
      id: 'uae',
      serviceProvider: 'Souq.com FZ LLC',
      address: ['C/O Amazon.com', 'Attn: Legal Department', 'Dubai Properties Headquarters', 'Zone C, 3rd Floor', 'Dubai, United Arab Emirates'],
      altProvider: 'Amazon.com Services LLC',
      altAddress: ['C/O Amazon.com', 'Attn: Legal Department', '410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A.'],
      altDescription: 'All other customers in the United Arab Emirates',
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Condition of Use',
        'Privacy Notice',
        'Interest-Based Ads Policy',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.amazon.ae'
    },
    {
      name: 'United Kingdom, each country within Europe (excluding the European Union) and other surrounding countries and territories',
      id: 'uk',
      serviceProvider: 'Amazon Digital UK Ltd',
      address: ['1 Principal Place', 'Worship Street', 'London', 'EC2A 2FA', 'Company Registered Number: 6528297'],
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Condition of Use & Sale',
        'Privacy Notice',
        'Cookies Notice',
        'Interest-Based Ads Notice',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.amazon.co.uk / www.primevideo.com'
    },
    {
      name: 'United States and all other countries and territories',
      id: 'us',
      serviceProvider: 'Amazon.com Services LLC',
      address: ['C/O Amazon.com', 'Attn: Legal Department', '410 Terry Avenue North', 'Seattle, WA 98109-5210, U.S.A.'],
      terms: [
        'Amazon Prime Video Terms of Use',
        'Amazon Prime Video Usage Rules',
        'Condition of Use',
        'Privacy Notice',
        'Interest-Based Ads Policy',
        'Twitch Terms of Service (if you use any Twitch Prime benefit)'
      ],
      marketplace: 'www.amazon.com (United States) / www.primevideo.com (all other countries)'
    }
  ];

  sidebarLinks: SidebarLink[] = [
    { 
      title: 'AMAZON PRIME VIDEO SERVICE PROVIDER INFORMATION AND APPLICABLE TERMS AND POLICIES',
      active: true,
      url: '#'
    },
    { title: 'Amazon Prime Video Terms of Use - Global', url: '#' },
    { title: 'Amazon Prime Video Usage Rules', url: '#' },
    { title: 'VAT / GST Rates', url: '#' },
    { title: 'About Cookies', url: '#' },
    { title: 'Content Policy Guidelines', url: '#' },
    { title: 'About Personal Information Use Across Amazon Services', url: '#' },
    { title: 'About Tax on Prime Video subscriptions sold on PrimeVideo.com', url: '#' },
    { title: 'Discounted Monthly Subscription with Commitment', url: '#' }
  ];

  ngOnInit(): void {
    this.filteredCountries = this.countries;
  }

  scrollToCountry(countryId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(countryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -20);
    }
  }

  onSearchChange(): void {
    if (this.searchQuery.trim() === '') {
      this.showSearchResults = false;
      this.filteredCountries = this.countries;
      return;
    }

    this.showSearchResults = true;
    const query = this.searchQuery.toLowerCase().trim();
    
    this.filteredCountries = this.countries.filter(country => {
      const nameMatch = country.name.toLowerCase().includes(query);
      const providerMatch = country.serviceProvider?.toLowerCase().includes(query) || false;
      const altProviderMatch = country.altProvider?.toLowerCase().includes(query) || false;
      const termsMatch = country.terms.some(term => term.toLowerCase().includes(query));
      const marketplaceMatch = country.marketplace.toLowerCase().includes(query);
      const addressMatch = country.address?.some(line => line.toLowerCase().includes(query)) || false;
      const altAddressMatch = country.altAddress?.some(line => line.toLowerCase().includes(query)) || false;
      
      return nameMatch || providerMatch || altProviderMatch || termsMatch || 
             marketplaceMatch || addressMatch || altAddressMatch;
    });
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.showSearchResults = false;
    this.filteredCountries = this.countries;
  }

  getSeeAllHelpLink(): string {
    return '#all-topics';
  }
}
