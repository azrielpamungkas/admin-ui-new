import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignUp from '../components/Fragments/FormSignUp'
import { registerService } from '../services/authService';
import AppSnackbar from '../components/Elements/AppSnackBar';
import { useState } from 'react';

function SignUpPage() {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };
    const handleRegister = async (name, email, password) => {
        try {
            const response = await registerService(name, email, password);
            setSnackbar({ open: true, message: response.msg, severity: "success" });
        } catch (err) {
            setSnackbar({ open: true, message: err.msg, severity: "error" });
        }
    };
    return (
        <AuthLayout>
            <FormSignUp onSubmit={handleRegister} />
            <AppSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />
        </AuthLayout>
    )
}

export default SignUpPage