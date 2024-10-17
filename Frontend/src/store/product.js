
import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProducts: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image || !newProduct.description) {
            return { success: false, Message: "Veuillez entrer tous les champs" };
        }

        const res = await fetch("api/products/", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        const data = await res.json();
        set((state) => ({products: [...state.products, data]}))
        return { success: true, message: "Produit ajouté avec succès" };
    },
     fetchProduct : async () => {
        try {
            const res = await fetch("api/products");
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            
            const data = await res.json();
            set({ product: data});
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },

    deleteProduct: async (pid) => {
		const res = await fetch(`api/products/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success){ return { success: false, message: data.message };}

		// update the ui immediately, without needing a refresh
		set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
		return { success: true, message: data.message };
	},
	updateProduct: async (pid, updatedProduct) => {
		const res = await fetch(`api/products/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		});
		const data = await res.json();
		if (!data.success){ return { success: false, message: data.message };}

		// update the ui immediately, without needing a refresh
		set((state) => ({
			products: state.products.map((product) => (product._id === pid ? data.data : product)),
		}));

		return { success: true, message: data.message };
	},

    
    
}));


