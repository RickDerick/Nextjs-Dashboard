'use server';


export async function createInvoice(formData: FormData) {

    const rawFormData = {
        customerId : formData.get('customerID'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
}