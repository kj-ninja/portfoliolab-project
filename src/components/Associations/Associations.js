import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import './Associations.scss';
import Foundations from "./ Foundations/Foundations";
import Pagination from "./Pagination/Pagination";
import Organizations from "./Organizations/Organizations";
import Locals from "./Locals/Locals";

const Associations = () => {
    const [association, setAssociation] = useState('foundations');
    const [foundations] = useState([
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Dbam o Zdrowie”',
            purpose: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
            details: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
        },
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Dla dzieci”',
            purpose: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
            details: 'ubrania, meble, zabawki'
        },
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Bez domu”',
            purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
            details: 'ubrania, jedzenie, ciepłe koce'
        },
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Dla dzieci”',
            purpose: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
            details: 'ubrania, meble, zabawki'
        },
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Dbam o Zdrowie”',
            purpose: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
            details: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
        },
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Bez domu”',
            purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
            details: 'ubrania, jedzenie, ciepłe koce'
        },
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Bez domu”',
            purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
            details: 'ubrania, jedzenie, ciepłe koce'
        },
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Dbam o Zdrowie”',
            purpose: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
            details: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
        },
        {
            info: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            name: 'Fundacja “Dla dzieci”',
            purpose: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
            details: 'ubrania, meble, zabawki'
        }
    ]);
    const [organizations] = useState([
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Organizacja “Lorem Ipsum 1”',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            details: 'Egestas, sed, tempus'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Organizacja “Lorem Ipsum 2”',
            purpose: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
            details: 'Ut, aliquam, purus, sit, amet'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Organizacja “Lorem Ipsum 3”',
            purpose: 'Scelerisque in dictum non consectetur a erat nam.',
            details: 'Mi, quis, hendrerit, dolor'
        }, {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Organizacja “Lorem Ipsum 4”',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            details: 'Egestas, sed, tempus'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Organizacja “Lorem Ipsum 5”',
            purpose: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
            details: 'Ut, aliquam, purus, sit, amet'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Organizacja “Lorem Ipsum 6”',
            purpose: 'Scelerisque in dictum non consectetur a erat nam.',
            details: 'Mi, quis, hendrerit, dolor'
        }
    ]);
    const [locals] = useState([
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Zbiórka “Lorem Ipsum 1”',
            purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            details: 'Egestas, sed, tempus'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Zbiórka “Lorem Ipsum 2””',
            purpose: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
            details: 'Ut, aliquam, purus, sit, amet'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            name: 'Zbiórka “Lorem Ipsum 3”',
            purpose: 'Scelerisque in dictum non consectetur a erat nam.',
            details: 'Mi, quis, hendrerit, dolor'
        }
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [isFoundationsActive, setIsFoundationsActive] = useState(true);
    const [isOrganizationsActive, setisOrganizationsActive] = useState(false);
    const [isLocalsActive, setisLocalsActive] = useState(false);


    function getCurrentFoundation() {
        const indexOfLastFoundation = currentPage * postsPerPage;
        const indexOfFirstFoundation = indexOfLastFoundation - postsPerPage;
        return foundations.slice(indexOfFirstFoundation, indexOfLastFoundation);
    }

    function getCurrentOrganization() {
        const indexOfLastOrganization = currentPage * postsPerPage;
        const indexOfFirstOrganization = indexOfLastOrganization - postsPerPage;
        return organizations.slice(indexOfFirstOrganization, indexOfLastOrganization);
    }

    function getCurrentLocal() {
        const indexOfLastLocal = currentPage * postsPerPage;
        const indexOfFirstLocal = indexOfLastLocal - postsPerPage;
        return locals.slice(indexOfFirstLocal, indexOfLastLocal);
    }

    // Change page
    const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

    let result;
    if (association === 'foundations') {
        result = (
            <>
                <Foundations foundations={getCurrentFoundation()}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={foundations.length} paginate={handlePaginate}/>
            </>
        )
    } else if (association === 'organizations') {
        result = (
            <>
                <Organizations organizations={getCurrentOrganization()}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={organizations.length} paginate={handlePaginate}/>
            </>
        )
    } else if (association === 'locals') {
        result = (
            <>
                <Locals locals={getCurrentLocal()}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={locals.length} paginate={handlePaginate}/>
            </>
        )
    }

    const handleFoundations = () => {
        setAssociation('foundations');
        setIsFoundationsActive(true);
        setisOrganizationsActive(false);
        setisLocalsActive(false);
    };

    const handleOrganizations = () => {
        setAssociation('organizations');
        setIsFoundationsActive(false);
        setisOrganizationsActive(true);
        setisLocalsActive(false);
    };

    const handleLocals = () => {
        setAssociation('locals');
        setIsFoundationsActive(false);
        setisOrganizationsActive(false);
        setisLocalsActive(true);
    };


    return (
        <section className="associations">
            <h2>Komu pomagamy?</h2>
            <img src={require("../../assets/Decoration.svg")} alt=""/>
            <div className="associations__buttons">
                <Button onClick={() => handleFoundations()} variant="outline-secondary" size="lg" className={isFoundationsActive ? 'active' : ''}>Fundacjom</Button>
                <Button onClick={() => handleOrganizations()} variant="outline-secondary" size="lg" className={isOrganizationsActive ? 'active' : ''}>Organizacjom pozarządowym</Button>
                <Button onClick={() => handleLocals()} variant="outline-secondary" size="lg" className={isLocalsActive ? 'active' : ''}>Lokalnym zbiórkom</Button>
            </div>
            {result}
        </section>
    );
};

export default Associations;