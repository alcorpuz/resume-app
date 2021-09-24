import React from 'react';
import './Coursework.css';

function Coursework() {
  return (
    <div className='course-container'>
        <div className='course-Pane'>
            <div className='course-wrap'>Information Retrieval:&nbsp;</div>
            <p>An introduction to information retrieval including indexing, retrieval, classifying, and clustering text and multimedia documents.</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Introduction to Data Management:&nbsp;</div>
            <p>Introduction to the design of databases and the use of database management systems (DBMS) for applications. Topics include entity-relationship modeling for design, relational data model, relational algebra, relational design theory, and Structured Query Language (SQL) programming.</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Project in Databases and Web Applications:&nbsp;</div>
                <p>Introduces students to advanced database technologies and Web applications. Topics include database connectivity (ODBC/JDBC), extending databases using stored procedures, database administration, Web servers, Web programming languages (Java servlets, XML, Ajax, and mobile platforms).</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Advanced Computer Networks:&nbsp;</div>
            <p>Fundamental principles in computer networks are applied to obtain practical experience and skills necessary for designing and implementing computer networks, protocols, and network applications. Various network design techniques, simulation techniques, and UNIX network programming are covered.</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Concepts of Programming Languages:&nbsp;</div>
            <p>In-depth study of several contemporary programming languages stressing variety in data structures, operations, notation, and control. Examination of different programming paradigms, such as logic programming, functional programming and object-oriented programming; implementation strategies, programming environments, and programming style.</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Formal Languages and Automata:&nbsp;</div>
            <p>Formal aspects of describing and recognizing languages by grammars and automata. Parsing regular and context-free languages. Ambiguity, nondeterminism. Elements of computability; Turning machines, random access machines, undecidable problems, NP-completeness.</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Introduction to Artificial Intelligence:&nbsp;</div>
            <p>Different means of representing knowledge and uses of representations in heuristic problem solving. Representations considered include predicate logic, semantic nets, procedural representations, natural language grammars, and search trees.</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Machine Learning and Data-Mining:&nbsp;</div>
            <p>Introduction to principles of machine learning and data-mining applied to real-world datasets. Typical applications include spam filtering, object recognition, and credit scoring.</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Human Computer Interaction:&nbsp;</div>
            <p>Basic principles of human-computer interaction (HCI). Introduces students to user interface design techniques, design guidelines, and usability testing. Students gain the ability to design and evaluate user interfaces and become familiar with some of the outstanding research problems in HCI.</p>
        </div>
        <div className='course-Pane'>
            <div className='course-wrap'>Advanced C++:&nbsp;</div>
            <p>Advanced programming language concepts for more complex, higher performance software design. Builds depth of programming skills in C++ as a foundation for upper-division courses and projects. Focuses on strengthening programming, debugging, and problem solving skills.</p>
        </div>
    </div>
    
  );
}

export default Coursework;