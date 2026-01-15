import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { expenseService } from "../services/dataService";
import AppSnackbar from "../components/Elements/AppSnackBar";
import CardExpenseComparison from "../components/Fragments/CardExpenseComparison";


function ExpensePage() {
    const [expenses, setExpenses] = React.useState([]);
    const [snackbar, setSnackbar] = React.useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const fetchExpenses = async () => {
        try {
            const data = await expenseService();
            setExpenses(data);
        } catch (err) {
            setSnackbar({ open: true, message: "Gagal mengambil data expenses", severity: "error" });
            if (err.status === 401) {
                logout();
            }
        }
    };

    React.useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <>
            <MainLayout>
                <CardExpenseComparison data={expenses} />
                <AppSnackbar
                    open={snackbar.open}
                    message={snackbar.message}
                    severity={snackbar.severity}
                    onClose={handleCloseSnackbar}
                />
            </MainLayout>
        </>
    );
}

export default ExpensePage;

