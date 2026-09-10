import { Linking, Alert } from 'react-native';

export const openWhatsApp = async (phone: string, vendorName?: string) => {
  // Strip + and spaces — wa.me wants country code + number only
  const num = phone.replace(/[^0-9]/g, '');
  const msg = vendorName
    ? `Assalam-o-alaikum, I found ${vendorName} on W Boys and wanted to ask about your materials.`
    : 'Assalam-o-alaikum, I found you on W Boys.';
  const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  try {
    const can = await Linking.canOpenURL(url);
    if (can) await Linking.openURL(url);
    else Alert.alert('WhatsApp not installed', 'Install WhatsApp to message this vendor.');
  } catch {
    Alert.alert('Could not open WhatsApp');
  }
};

export const callVendor = async (phone: string) => {
  const url = `tel:${phone}`;
  try {
    const can = await Linking.canOpenURL(url);
    if (can) await Linking.openURL(url);
    else Alert.alert('Cannot place call from this device');
  } catch {
    Alert.alert('Could not start call');
  }
};
