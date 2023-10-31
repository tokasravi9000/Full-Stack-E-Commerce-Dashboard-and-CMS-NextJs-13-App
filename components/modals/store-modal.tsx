'use client'

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return(
        <Modal
            title="Create Store"
            description="Add new Store to manage product and categoriies"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future create store form
        </Modal>
    )
}