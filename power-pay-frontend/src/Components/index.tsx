import React, { useState } from 'react';
import QRScannerComponent from './scan_qr';
import UserInfo from './userinfo'; // Import the UserInfo component
import { Outlet, Link } from "react-router-dom";

const PaymentOptions: React.FC = () => {
  const [showQRScanner, setShowQRScanner] = useState<boolean>(false);
  const [showInputManually, setShowInputManually] = useState<boolean>(false);

  const handleScanQRClick = () => {
    setShowQRScanner(true);
    setShowInputManually(false); // Close InputManuallyComponent if open
  };

  const handleInputManuallyClick = () => {
    setShowInputManually(true);
    setShowQRScanner(false); // Close QRScannerComponent if open
  };

  return (
    <div className="container">
      <h2>Payment Options</h2>
      <p>Please select how you would like to send money:</p>
      <Link to={`UserInfo`}>
      <button onClick={handleInputManuallyClick}>Input Manually</button>
      </Link>
      <button onClick={handleScanQRClick}>Scan QR Code</button>

      {showQRScanner && <QRScannerComponent />}
      {showInputManually && <UserInfo />} {/* Render UserInfo component when showInputManually is true */}
    </div>
  );
};

export default PaymentOptions
