import { shopInfo } from './data/shopInfo';

const serviceNames = {
  'services.general': 'பொது சேவை',
  'services.engineRepair': 'இயந்திர பழுதுபார்ப்பு',
  'services.oilChange': 'ஆயில் மாற்றம்',
  'services.brakeService': 'பிரேக் சேவை',
  'services.tyreService': 'டயர் / பங்க்சர்',
  'services.electricalWork': 'மின்சார பிரச்சனை',
  'services.other': 'மற்றவை',
};

const getValue = (value) => value?.trim() || '-';
const getServiceName = (service) => serviceNames[service] || getValue(service);
const whatsappNumber = shopInfo.whatsapp.replace(/[^0-9]/g, '');

export const createWhatsAppUrl = (message) => {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${whatsappNumber}?${params.toString()}`;
};

export const createTamilServiceInquiryMessage = ({ name, phone, service, message }) => [
  'வணக்கம், எனக்கு பைக் சேவை தேவை.',
  '',
  `பெயர்: ${getValue(name)}`,
  `மொபைல் எண்: ${getValue(phone)}`,
  `தேவையான சேவை: ${getServiceName(service)}`,
  `செய்தி: ${getValue(message)}`,
].join('\n');

export const createTamilBookingMessage = ({ name, phone, service, date, time, message }) => [
  'வணக்கம், பைக் சேவையை பதிவு செய்ய விரும்புகிறேன்.',
  '',
  `பெயர்: ${getValue(name)}`,
  `மொபைல் எண்: ${getValue(phone)}`,
  `தேவையான சேவை: ${getServiceName(service)}`,
  `விருப்பமான தேதி: ${getValue(date)}`,
  `விருப்பமான நேரம்: ${getValue(time)}`,
  `கூடுதல் செய்தி: ${getValue(message)}`,
].join('\n');
