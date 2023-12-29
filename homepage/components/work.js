import { useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export const Work = () => {
    const [selectedId, setSelectedId] = useState(null);
    const items = [
        { id: 1, subtitle: "Company A", title: "Position A", description: "Experience A" },
        { id: 2, subtitle: "Company B", title: "Position B", description: "Experience B" },
        { id: 3, subtitle: "Company C", title: "Position C", description: "Experience C" },
    ];

    return (
        <Box display="flex" flexWrap="wrap">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    layoutId={item.id}
                    onClick={() => setSelectedId(item.id)}
                    style={{
                        borderRadius: "8px",
                        padding: "16px",
                        margin: "8px",
                        backgroundColor: useColorModeValue("#eaeaea", "#1f1f1f"),
                        cursor: "pointer",
                        flex: "0 0 calc(33.33% - 16px)",
                        minWidth: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        style={{
                            borderRadius: "8px",
                            padding: "16px",
                            margin: "8px",
                            backgroundColor: useColorModeValue("#eaeaea", "#1f1f1f"),
                            flex: "0 0 100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {items.map((item) => {
                            if (item.id === selectedId) {
                                return (
                                    <motion.div key={item.id}>
                                        <motion.h5>{item.subtitle}</motion.h5>
                                        <motion.h2>{item.title}</motion.h2>
                                        <motion.p>{item.description}</motion.p>
                                        <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                                    </motion.div>
                                );
                            }
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};
