import { CircularProgress } from "@mui/material";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
function CardExpenseComparison(props) {
    const getIcon = (category) => {
        switch (category) {
            case "housing":
                return <Icon.House size={20} />;
            case "food":
                return <Icon.Food size={20} />;
            case "transportation":
                return <Icon.Transport size={20} />;
            case "entertainment":
                return <Icon.Movie size={20} />;
            case "shopping":
                return <Icon.Shopping size={20} />;
            default:
                return <Icon.Other size={20} />;
        }
    }
    const { data } = props;
    const expenseData = (<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {data.map((item, index) => (
            <div key={index} className="flex flex-col rounded-lg ">
                <div className="rounded-lg flex flex-col justify-between h-full">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-200 text-gray-02 p-2 rounded-lg flex place-content-center">
                                {getIcon(item.category)}
                            </div>
                            <div>
                                <span className="text-gray-500 font-medium text-sm">{item.category}</span>
                                <div className="font-bold text-lg leading-tight mt-1">${item.amount}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center justify-end gap-1">
                                <span className="text-gray-800 text-sm">{item.percentage}%</span>
                                {item.trend === 'up' ? <div className="text-special-green"> <Icon.ArrowUp size={16} /> </div> : <div className="text-special-red"> <Icon.ArrowDown size={16} /> </div>}
                            </div>
                            <div className="text-gray-400 text-xs text-right mb-1">Compare to the last month</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded p-4">
                    {item.detail && (
                        <div className="mt-2 flex flex-col gap-3 px-1">
                            {item.detail.map((bd, index) => (
                                <div key={index} className="flex justify-between items-center py-1 border-b-2 border-gray-100 last:border-0 pb-2 mb-1">
                                    <span className="text-gray-600 font-medium text-sm">{bd.item}</span>
                                    <div className="text-right">
                                        <div className="font-bold text-gray-800 text-sm">${bd.amount}</div>
                                        <div className="text-gray-400 text-xs mt-0.5">{bd.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        ))}
    </div>)
    return (
        <Card
            className="bg-transparent"
            title="Expenses Comparison"
            desc={Object.keys(data).length === 0 ? <div className="flex flex-col justify-center items-center h-full text-primary">
                <CircularProgress color="inherit" size={50} enableTrackSlot />
                Loading Data
            </div> : expenseData}
        />
    );
}

export default CardExpenseComparison;