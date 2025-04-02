import { useContext } from 'react';
import { CartContext } from '../src/screens/CartContext';  // Adjust the path as needed

function useCart() {
    const context = useContext(CartContext);

    // Handle case where the context might not be available
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
}

export default useCart;
