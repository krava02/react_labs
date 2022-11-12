import {useForm, FormProvider} from "react-hook-form";
import {Box, Typography} from "@mui/material";
import {useState} from "react";
import * as yup from "yup";
import Space from "./Space";
import Cities from "./Cities";

const schema = yup.object().shape({
    city_from: yup.string().required("Вкажіть місто відправлення").label("Місто відправлення"),
    city_to: yup.string().required("Вкажіть місто прибуття").label("Місто прибуття"),
    type: yup.string().required("Вкажіть вид вантажу").label("Вид вантажу"),
    spaces: yup.array().when("type", {
        is: "palette",
        then: yup.array().of(
            yup.object().shape({
                count: yup.number().min(1, "Кількість не може бути меншою 1")
                    .required("Вкажіть кількість").label("Кількість").typeError("Вкажіть кількість"),
                cost: yup.string()
                    .test(
                        "is-positive-number",
                        "Вкажіть додатнє число",
                        (value) => value > 0
                    )
                    .required("Вкажіть вартість").label("Вартість").typeError("Вкажіть вартість"),
                paletteType: yup.string().required("Оберіть тип палети").test(
                    'is-not-empty',
                    'Оберіть тип палети',
                    (value) => value !== ""
                ).label("Тип палети"),
            })
        )
    }).when("type", {
        is: "cargo",
        then: yup.array().of(
            yup.object().shape({
                count: yup.number().min(1, "Кількість не може бути меншою 1")
                    .required("Оберіть кількість").label("Кількість").typeError("Введіть кількість"),
                weight: yup.string().test(
                    "is-positive-number",
                    "Введіть додатнє число",
                    (value) => value > 0
                ).required("Вкажіть вагу").label("Вага").typeError("Введіть вагу"),
                cost: yup.string()
                    .test(
                        "is-positive-number",
                        "Введіть додатнє число",
                        (value) => value > 0
                    )
                    .required("Введіть вартість").label("Вартість").typeError("Введіть вартість"),
                length: yup.number().min(0, "Висота не може бути від'ємною")
                    .required("Вкажіть довжину").label("Довжина").typeError("Введіть довжину"),
                width: yup.number().min(0, "Ширина не може бути від'ємною")
                    .required("Вкажіть ширину").label("Ширина").typeError("Введіть ширину"),
                height: yup.number().min(0, "Висота не може бути від'ємною")
                    .required("Вкажіть висоту").label("Висота").typeError("Введіть висоту"),
            })
        )
    }),
    packaging: yup.boolean().label("Тип упаковки").default(false),
    packagingType: yup.string().when("packaging", {
        is: true,
        then: yup.string()
            .test(
                'is-not-empty',
                'Оберіть тип упаковки',
                (value) => value !== ""
            ).required("Оберіть тип упаковки")
    }),
    liftUp: yup.boolean().label("Підйом на поверх").default(false),
    liftUpFloors: yup.number().when("liftUp", {
        is: true,
        then: yup.number().min(1, "Кількість поверхів не може бути меншою 1").typeError("Введіть кількість поверхів")
    }),
    lifUpElevator: yup.boolean().label("Ліфт").default(false),
    return: yup.boolean().label("Зворотня доставка").default(false),
    returnType: yup.string().when("return", {
        is: true,
        then: yup.string().required("Оберіть тип зворотньої доставки")
    }),
    palletizing: yup.boolean().label("Палетування").default(false),
});

const useYupValidationResolver = (schema) => {
    return async (data) => {
        try {
            await schema.validate(data, {abortEarly: false});
            return {values: data, errors: {}};
        } catch (e) {
            console.log({
                values: {},
                errors: e.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            });

            return {
                values: {},
                errors: e.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            };
        }
    };
}

export default function Validate(props) {
    const {cities, palettes, packages, returnTypes} = props;

    const resolver = useYupValidationResolver(schema);
    const {register, handleSubmit, formState: {errors}} = useForm({resolver});

    const [type, setType] = useState("");
    const [spaces, setSpaces] = useState([]);
    const [isPackaging, setIsPackaging] = useState(false);
    const [isReturn, setIsReturn] = useState(false);
    const [isLiftUp, setIsLiftUp] = useState(false);
    const [count, setCount] = useState(0);

    const addSpace = (space = {}) => {
        space["type"] = type;
        setSpaces([...spaces, space]);
        setCount(count + 1);
    }
    const removeSpace = (index) => {
        setSpaces(spaces.filter((_, i) => i !== index));
        setCount(count - 1);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);

        if (e.target.value === "cargo") {
            setSpaces([{count: 1, cost: 0, weight: 0, length: 0, width: 0, height: 0}]);
        } else if (e.target.value === "palette") {
            setSpaces([{count: 1, cost: 0, paletteType: ""}]);
        }
        setCount(1);
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    const onReset = () => {
        setType("");
        setSpaces([]);
    }

    return (
        <Box>
            <Typography variant="h4" align={'center'}>Вартість доставки</Typography>
            <Typography variant="h6" align={'center'}>Орієнтовна вартість перевезення, яку сплачує
                Відправник.</Typography>
            <FormProvider {...{register, handleSubmit, errors}}>
                <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
                    <div>
                        <Cities cities={cities} type="from"/>
                        <Cities cities={cities} type="to"/>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="type">Вид відправлення</label>
                            <select defaultValue="" id="type" {...register("type")} onChange={handleTypeChange}>
                                <option value="" disabled hidden>Вкажіть вид відправлення</option>
                                <option value="palette">Палети</option>
                                <option value="cargo">Вантажі</option>
                            </select>
                            <span>{errors.type?.message}</span>
                        </div>
                    </div>

                    {spaces.length > 0 &&
                        <div>
                            {spaces.map((space, index) => (
                                <Space key={"space" + index.toString()} index={index} type={type}
                                       removeSpace={removeSpace}
                                       palettes={palettes}/>
                            ))}
                            <button type="button" onClick={addSpace}>Додати місце</button>
                        </div>
                    }


                    <div>
                        <div>
                            <input id="packaging" type="checkbox" {...register(`packaging`)}
                                   onChange={() => setIsPackaging(!isPackaging)}/>
                            <label htmlFor="packaging">Упаковка</label>
                        </div>
                        {isPackaging && (
                            <>
                                <div>
                                    <select defaultValue="" id="packagingType" {...register(`packagingType`)}>
                                        <option value="" disabled hidden>Вкажіть тип упаковки</option>
                                        {packages.map((pack, index) => (
                                            <option key={"package" + index.toString()}
                                                    value={pack.id}>{pack.label}</option>
                                        ))}
                                    </select>
                                    <span>{errors.packagingType?.message}</span>
                                </div>
                                <span>Кількість: {count}</span>
                            </>
                        )}
                    </div>


                    <div>
                        <div>
                            <input id="liftUp" type="checkbox" {...register(`liftUp`)}
                                   onChange={() => setIsLiftUp(!isLiftUp)}/>
                            <label htmlFor="liftUp">Підйом на поверх</label>
                        </div>
                        {isLiftUp && (
                            <>
                                <div>
                                    <label htmlFor="liftUpFloors">Поверх</label>
                                    <input id="liftUpFloors" type="number" {...register(`liftUpFloors`)}/>
                                    <span>{errors.liftUpFloors?.message}</span>
                                </div>
                                <div>
                                    <input id="liftUpElevator" type="checkbox" {...register(`liftUpElevator`)}/>
                                    <label htmlFor="liftUpElevator">Ліфт</label>
                                </div>
                            </>
                        )}
                    </div>

                    <div>
                        <div>
                            <input id="return" type="checkbox" {...register(`return`)}
                                   onChange={() => setIsReturn(!isReturn)}/>
                            <label htmlFor="return">Повернення</label>
                        </div>
                        {isReturn &&
                            <div>
                                <label htmlFor="returnType">Тип повернення</label>
                                <select defaultValue="" id="returnType" {...register(`returnType`)}>
                                    <option value="" disabled hidden>Вкажіть тип повернення</option>
                                    {returnTypes.map((type, index) => (
                                        <option key={"returnType" + index.toString()}
                                                value={type.id}>{type.label}</option>
                                    ))}
                                </select>
                                <span>{errors.returnType?.message}</span>
                            </div>
                        }
                    </div>

                    <div>
                        <div>
                            <input id="palletizing" type="checkbox" {...register(`palletizing`)}/>
                            <label htmlFor="palletizing">Палетування</label>
                        </div>
                    </div>

                    <div>
                        <input type="submit"/>
                        <input type="reset"/>
                    </div>
                </form>
            </FormProvider>
        </Box>
    );
}