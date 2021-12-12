import { ChangeEventHandler, FormEvent, useState } from 'react';

export function useTextInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e: FormEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
    }

    return {
        value,
        onChange: handleChange as ChangeEventHandler<any>,
    };
}
