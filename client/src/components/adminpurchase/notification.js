import React, { useEffect, useState } from 'react';
import { fetchPurchasesByAdmin } from '../../api'; // Adjust this path as needed based on your project structure
import { useAuth } from '../../context/AuthContext'; // Ensure this path matches the location of your AuthContext

const AdminPurchases = () => {
    const [purchases, setPurchases] = useState([]);
    const { authData } = useAuth();  // Use the useAuth hook to access the authentication data
    const adminId = authData?.adminId; // Ensure adminId is correctly defined in your authData structure

    useEffect(() => {
        const getPurchases = async () => {
            if (adminId) {  // Only fetch if adminId is available
                try {
                    const { data } = await fetchPurchasesByAdmin(adminId);
                    setPurchases(data); // Set the fetched purchases to state
                } catch (error) {
                    console.error('Error fetching purchases:', error);
                }
            }
        };

        getPurchases();
    }, [adminId]);  // Depend on adminId to re-run this effect when it changes

    return (
        <div>
            {purchases.length > 0 ? (
                purchases.map((purchase, index) => (
                    <div key={index}>
                        <p>Product ID: {purchase.productId}</p>
                        <p>Buyer ID: {purchase.buyerId}</p>
                    </div>
                ))
            ) : (
                <p>No purchases found.</p>
            )}
        </div>
    );
};

export default AdminPurchases;
