export default function SignUp() {
    return(
        <div>
            <h1>РЕШИЛ НАЧАТЬ ХАКАТОНИТЬ?</h1>
            <h1>WELCOME!</h1>
            <form>
                <div>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div>
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" id="surname" name="surname"/>
                </div>
                <div>
                    <label htmlFor="login">Никнейм</label>
                    <input type="text" id="login" name="login"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="contact">Предпочтительный контакт для связи</label>
                    <input type="text" id="contact" name="contact"/>
                </div>
                <div>
                    <label htmlFor="about">О себе</label>
                    <textarea name="about" id="about" cols={30} rows={10}></textarea>
                </div>
                <div>
                    <input type="checkbox" id="agreement" name="agreement"/>
                    <label htmlFor="agreement">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet egestas lectus. Pellentesque vel finibus velit. Nunc vitae metus pharetra, eleifend leo eu, luctus neque. Etiam porta turpis sed tellus aliquam, sed gravida sapien sollicitudin. Nullam porta arcu nunc. In in nisi tincidunt, ornare arcu sed, congue leo. Nam imperdiet arcu et dui facilisis vestibulum.</label>
                </div>
            </form>
        </div>
    )
}