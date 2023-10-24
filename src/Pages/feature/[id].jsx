import {useNavigate, useParams} from "react-router-dom";
import MainLayout from "../../layout/Main.jsx";
import UserSection from "../../components/UserSection/UserSection.jsx";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import {useEffect, useState} from "react";

function Featured() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [feature, setFeature] = useState({});
    const navigate = useNavigate();

    const getFeatured = async (id = params.id) => {
        const response = await fetch('../api/featured.json');
        if (response.status === 404) {
            navigate('/404');
            return;
        }

        const result = await response.json();
        if (result && result[parseInt(id)]) {
            setFeature(result[parseInt(id)]);
        } else {
            navigate('/404');
        }
    }

    useEffect(() => {
        getFeatured().finally(() => setLoading(false));
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

    return (
        <MainLayout>
            <UserSection>
                <img src={feature.img} alt={feature.name} />
                <h1>{feature.name}</h1>
                <p>{feature.description}</p>
            </UserSection>
        </MainLayout>
    )
}

export default Featured;
