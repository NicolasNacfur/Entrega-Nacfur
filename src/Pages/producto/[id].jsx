import MainLayout from "../../layout/Main.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import UserSection from "../../components/UserSection/UserSection.jsx";
import { useNavigate } from "react-router-dom";

function Producto() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const navigate = useNavigate()

    const getProduct = async (id = params.id) => {
        const response = await fetch('../api/notre.json');
        if (response.status === 404) {
            navigate('/404');
            return;
        }

        const result = await response.json();

        if (result && result[parseInt(id)]) {
            setProduct(result[parseInt(id)]);
        } else {
            navigate('/404');
        }
    }

    useEffect(() => {
        getProduct()
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <MainLayout>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 5 }}>
                    <CircularProgress />
                </Box>
            </MainLayout>
        )
    }

    return(
        <MainLayout>
            <UserSection>
                <img src={product.img} alt={product.name} />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </UserSection>
        </MainLayout>
    )
}

export default Producto;
