import TabbedFolder from "../components/page/TabbedFolder";

function MyCv()
{
    return(
        <div id="my_cv">
            <TabbedFolder tabs={['1', '2', '3']}>
                <p>P1</p>
                <p>P2</p>
                <p>P3</p>
            </TabbedFolder>
        </div>
    );
}

export default MyCv;