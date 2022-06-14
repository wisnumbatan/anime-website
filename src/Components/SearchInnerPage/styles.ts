import styled from "styled-components";

export const Search = styled.div`

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div{
            
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }

    svg#input-svg{
        background-color: #f3f2ff;
        border: none;
        border-right: none;
        border-radius: 18px 0 0 18px;

        color: #ff5ebc;

        height: 20px;
        width: auto;

        padding: 0.9rem 1rem;

        *{
            color: #ff5ebc;
        }
    }
       
    input{
        background-color: #f3f2ff;
        outline: 0;
        border: none;
        border-left: none;
        border-radius: 0 0 0 0;

        padding: 1rem;

        font-size: 1.6rem;
        font-weight: 400;

        :focus{
            background-color: #f3f2ff;
            ~button{
                cursor: pointer;
                padding: 1.1rem ;
                background-color: #ff5ebc;

                svg{
                    transition: all ease-in 200ms;
                    display: block;
                    color: #fff;
                }
            }
        }
    }
    button{
        svg{
            display: none;

            *{
                color: #fff;
            }
        }

        background-color: #f3f2ff;
        padding: 1.9rem ;
        border: none;
        border-radius: 0 18px 18px 0;
        font-size: 1.4rem;
    }
    



`

export const SearchResults = styled.div`

    z-index: 1000;

    position: relative;
    
    margin: 1rem 0;
    padding: 1rem;

    background-color: #ffa2c8;

    border-radius: 4px;

    div.heading-search-results{

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h1{
            font-size: 1.8rem;
            font-weight: 400;
            color: #fff;
        }
        button{
            cursor: pointer;
            padding: 0.5rem 1rem;
            outline: 0;
            border: 1px solid #c0c0c0;
            
            background-color: #fafafa;
            border-radius: 4px;

            color: #777777;

            :hover{
                border: 1px solid #666666;

                color: #333333;
            }
        }

    }

    .result-item{
        background-color: #fafafa;

        width: 300px;

        border-radius: 4px;

        border: 1px solid #ffa2c8;

        @media(max-width: 620px){
            width: -webkit-fill-available;
        }

        :hover{
            border: 1px solid #ff1a75;
        }

        a{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            border-radius: 4px;

            img{
                width: 30%;

                border-radius: 4px 0 0 4px;

            }

            .item-info{
                width: 70%;
                height: 100px;

                display: flex;
                flex-direction: column;
                justify-content: space-around;

                margin: 1rem;

                h2{
                    font-size: 1.6rem;
                    font-weight: 600;
                    color: #ff1a75;
                }
                h3{
                    font-size: 1.1rem;
                    font-weight: 300;
                    color: #444444;

                    margin-bottom: 1rem ;
                }

                ul{
                    display: flex;
                    flex-direction: row;

                    margin: 1rem 0;
                    
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #555555;

                    li:after{
                        content: ', ';
                    }

                    li:last-child:after{
                        content: ' ';
                    }
                }

                p{
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #ff1a75;
                }
            }
        }
        margin: 1rem 0;
    }

`